const jwt = require('jwt-simple');
const config = require('../config/app');
const userModel = require('../models/user.model');
let mongoose = require("mongoose");


const User = require('../models/user.model');
const validationHandler = require('../validations/validationHandler')

exports.funds = async (req, res, next) => {
    try{

        const id = req.params.id;
        const user = await User.findOne({_id:id});
        console.log(user)
        if (!user){
            const error = new Error("No User Found");
            error.statusCode = 401;
            throw error;
        }
        let funds = user.funds;
        res.send({funds});
    }catch(err){
        next(err);
    }
}

exports.addFunds = async (req, res, next) => {
    try{

        const id = req.body.id;
        const amountToAdd = parseInt(req.body.add);
        const accountNumber = req.body.accountNumber;

        const user = await User.findOne({_id:id});
        if (!user){
            const error = new Error("No User Found");
            error.statusCode = 401;
            throw error;
        }
        if (accountNumber != user.bankAccountNumber) {
            const error = new Error("Invalid Bank Account");
            error.statusCode = 401;
            throw error;
        }
        if (amountToAdd > user.bankBalance) {
            const error = new Error("Insufficient Bank Balance");
            error.statusCode = 401;
            throw error;
        }
        const newFunds = user.funds+amountToAdd;
        const newBalance = user.bankBalance-amountToAdd;

        userModel.findOneAndUpdate({_id:id},{$set:{funds:newFunds,bankBalance:newBalance}},(err,result)=> {
            if(!err){  
                res.send("Record updated succesfully")
            }else {
                res.send("Error generated "+err);
            }
        })
    }catch(err){
        next(err);
    }
}


exports.edit = async (req, res, next) => {
    try{
        const _id = req.body._id;
        const newAddress = req.body.address;
        console.log(_id)
        const user = await User.findById({_id});
        if (!user){
            const error = new Error("No User Found");
            error.statusCode = 401;
            throw error;
        }
        console.log(user)

        userModel.findByIdAndUpdate({_id},{$set:{address:newAddress}},(err,result)=> {
            if(!err){
                res.send("Record updated succesfully")
            }else {
                res.send("Error generated "+err);
            }
        })
        
    }catch(err){
        next(err);
    }
}

exports.login = async (req, res, next) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({email}).select("+password");
        if (!user){
            const error = new Error("Wrong Credentials");
            error.statusCode = 401;
            throw error;
        }
        const validPassword = await user.validPassword(password);
        if (!validPassword) {
            const error = new Error("Wrong Credentials");
            error.statusCode = 401;
            throw error;
        }
        const token = jwt.encode({id:user.id}, config.jwtSecret);
        return res.send({user, token});
    }catch(err){
        next(err);
    }
}

exports.signup = async (req,res,next) =>{
    try{
        validationHandler(req);
        const existingUser = await User.findOne({email: req.body.email});
        if (existingUser){
            const error = new Error("Email already used");
            error.statusCode = 401;
            throw error;
        }
        let user = new User();
        user.email = req.body.email;
        user.password = await user.encryptPassword(req.body.password);
        user.fname = req.body.fname;
        user.lname = req.body.lname;
        user.dob = req.body.dob;
        user.pnumber = req.body.pnumber;
        user.address = req.body.address;
        user.cart = [];
        user.funds = 0; 
        user.bankBalance = 10000;
        user.bankAccountNumber = 12345;
        user = await user.save();

        const token = jwt.encode({id: user.id}, config.jwtSecret);
        return res.send({user, token});
    } catch(err){
        next(err);
    }
}