const jwt = require('jwt-simple');
const config = require('../config/app');

let empData = require('../models/reports.model');
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
exports.sendrequest = async(req, res) => {

    let request = new empData({
        productName: req.body.productName,
        quantity: req.body.quantity
    });



    request.save((err, result) => {
        if (!err) {
            res.send("Record stored successfully " + result)
        } else {
            res.send("Record didn't store " + err);
        }
    })

}

exports.editProfile = async(req, res) => {
    let empId = req.body.empId;
    let updatedPass = await encryptPassword(req.body.password);

    Emp.updateOne({ _id: empId }, { $set: { password: updatedPass } }, (err, result) => {
        if (!err) {
            if (result.nModified > 0) {
                res.send("Record updated succesfully")
            } else {
                res.send("Record is not available");
            }
        } else {
            res.send("Error generated " + err);
        }
    })
}