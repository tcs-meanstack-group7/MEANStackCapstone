const jwt = require('jwt-simple');
const config = require('../config/app');
const userModel = require('../models/user.model');

const User = require('../models/user.model');
const validationHandler = require('../validations/validationHandler')

exports.funds = async (req, res, next) => {
    try{
        const uid = req.body.id;

        const user = await User.findOne({uid});
        console.log(user)
        if (!user){
            const error = new Error("No User Found");
            error.statusCode = 401;
            throw error;
        }
        let funds = user.funds;
        console.log(user)
        res.send({funds});
    }catch(err){
        next(err);
    }
}

exports.addFunds = async (req, res, next) => {
    try{
        const uid = req.body.id;
        const amountToAdd = req.body.add;
        const accountNumber = req.body.accountNumber;

        const user = await User.findOne({uid});
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
        userModel.updateOne({id:uid},{$set:{funds:newFunds,bankBalance:newBalance}},(err,result)=> {
            if(!err){
                if(result.nModified>0){
                        res.send("Record updated succesfully")
                }else {
                        res.send("Record is not available");
                }
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
        let uid = req.body.id;
        user.address = req.body.address;


        User.findByIdAndUpdate({uid},{address:req.body.address},(err,result)=>{
            if(err){
                res.send(err)
            }
            else{
                res.send(result)
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
        /*user.save((err,doc) => {
            if (!err) {
                res.send(doc);
            } else {
                console.log(err);
            }

        })*/ 

        const token = jwt.encode({id: user.id}, config.jwtSecret);
        return res.send({user, token});
    } catch(err){
        next(err);
    }
}