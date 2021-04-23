const jwt = require('jwt-simple');
const config = require('../config/app');

const User = require('../models/user.model');
const validationHandler = require('../validations/validationHandler')

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
            error.statusCode = 403;
            throw error;
        }
        let user = new User();
        user.email = req.body.email;
        user .password = await user.encryptPassword(req.body.password);
        user.fname = req.body.fname;
        user.lname = req.body.lname;
        user.dob = req.body.dob;
        user.pnumber = req.body.pnumber;
        user.address = req.body.address;
        user.cart = [];
        user.funds = 500; //random default value
        user = await user.save();

        const token = jwt.encode({id: user.id}, config.jwtSecret);
        return res.send({user, token});
    } catch(err){
        next(err);
    }
}

