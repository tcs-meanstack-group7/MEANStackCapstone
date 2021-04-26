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