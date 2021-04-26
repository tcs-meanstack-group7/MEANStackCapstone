const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id:{type:Number},
    email:{type:String,required:true},
    username:{type:String,required:true, select:false},
    password:{type:String,required:true, select:false},
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    dob:{type:Date,required:true},
    pnumber:{type:Number,required:true},
    address:{type:String,required:true},
    cart:[{type:Schema.Types.ObjectId, ref: "product"}],
    funds:{type:Number,required:true},
    bankBalance:{type:Number,required:true},
    bankAccountNumber:{type:Number,required:true}
});

UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(password,salt);
    return hash;
};

UserSchema.methods.validPassword = async function(candidatePassword){
    const result = await bcrypt.compare(candidatePassword,this.password)
    return result;
}

// Custom validation for email
UserSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

UserSchema.pre('save', function (next) {
    bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model("user", UserSchema,"Users");