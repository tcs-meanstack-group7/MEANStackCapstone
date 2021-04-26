const jwt = require('jwt-simple');
const config = require('../config/app');

const Emp = require('../models/employee.model');
const validationHandler = require('../validations/validationHandler')

exports.login = async (req, res, next) => {
    try{
        const id = req.body.id;
        const password = req.body.password;

        const emp = await Emp.findOne({id}).select("+password");
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
        const existingUser = await Emp.findOne({email: req.body._id});
        if (existingUser){
            const error = new Error("ID already used");
            error.statusCode = 403;
            throw error;
        }
        let emp = new Emp();
        emp._id = req.body._id;
        emp.password = await emp.encryptPassword(req.body.password);
        emp = await emp.save();

        const token = jwt.encode({id: emp.id}, config.jwtSecret);
        return res.send({emp, token});
    } catch(err){
        next(err);
    }
}