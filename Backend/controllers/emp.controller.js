const jwt = require('jwt-simple');
const config = require('../config/app');

const Emp = require('../models/employee.model');
const validationHandler = require('../validations/validationHandler')

exports.login = async (req, res, next) => {
    try{
        const empId = req.body.empId;
        const password = req.body.password;
        const emp = await Emp.findOne({empId}).select("+password");
        console.log(emp)
        if (!emp){
            const error = new Error("Wrong Credentials");
            error.statusCode = 401;
            throw error;
        }
        const validPassword = await emp.validPassword(password);
        if (!validPassword) {
            const error = new Error("Wrong Credentials");
            error.statusCode = 401;
            throw error;
        }
        const token = jwt.encode({id:emp.id}, config.jwtSecret);
        return res.send({emp, token});
    }catch(err){
        next(err);
    }
}

exports.signup = async (req,res,next) =>{
    try{
        validationHandler(req);
        const existingUser = await Emp.findOne({empId: req.body.empId});
        if (existingUser){
            const error = new Error("ID already used");
            error.statusCode = 403;
            throw error;
        }
        let emp = new Emp();
        emp.empId = req.body.empId;
        emp.password = await emp.encryptPassword(req.body.password);
        emp = await emp.save();

        const token = jwt.encode({id: emp.id}, config.jwtSecret);
        return res.send({emp, token});
    } catch(err){
        next(err);
    }
}