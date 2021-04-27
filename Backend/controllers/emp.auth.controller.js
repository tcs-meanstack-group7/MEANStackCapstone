const jwt = require('jwt-simple');
const config = require('../config/app');
const employeeModel = require('../models/employee.model');

const Emp = require('../models/employee.model');
const validationHandler = require('../validations/validationHandler')

exports.login = async(req, res, next) => {
    try {
        const empId = req.body.empId;
        const password = req.body.password;
        const emp = await Emp.findOne({ empId }).select("+password");
        console.log(emp)
        if (!emp) {
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
        const token = jwt.encode({ id: emp.id }, config.jwtSecret);
        return res.send({ emp, token });
    } catch (err) {
        next(err);
    }
}

exports.signup = async(req, res, next) => {
    try {
        validationHandler(req);
        const existingUser = await Emp.findOne({ empId: req.body.empId });
        if (existingUser) {
            const error = new Error("ID already used");
            error.statusCode = 403;
            throw error;
        }
        let emp = new Emp();
        emp.empId = req.body.empId;
        emp.password = await emp.encryptPassword(req.body.password);
        //emp.password = req.body.password;
        emp = await emp.save();

        const token = jwt.encode({ id: emp.id }, config.jwtSecret);
        return res.send({ emp, token });
    } catch (err) {
        next(err);
    }
}

exports.sendrequest = async(req, res) => {

    let request = new employeeModel({
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

/*
exports.editProfile = async(req, res) => {

    let profile = new employeeModel({
        //    id: req.body.empId,
        username: req.body.UserName,
        contact: req.body.ContactNumber,
        address: req.body.Address,
    })

    profile.find({}, (err, result) => {
        if (!result) {
            req.flash('error', 'No account found');
            return res.redirect('/edit');
        }
        if (!username || !contact || !address) { // simplified: '' is a falsey
            req.flash('error', 'One or more fields are empty');
            return res.redirect('/edit'); // modified
        }
        result.username = username;
        result.contact = contact;
        result.address = address;

        profile.save((err, result) => {
            if (!err) {
                res.send("profile updated successfully " + result)
            } else {
                res.send("profile didn't update " + err);
            }
        })

    })

}
*/