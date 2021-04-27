const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    empId: { type: String, required: true },
    password: { type: String, required: true, select: false },

});

var EmployeeData = new Schema({

    productName: { type: String, required: false },
    quantity: { type: Number, required: false },
    UserName: { type: String, require: false },
    ContactNumber: { type: Number, require: false },
    Address: { type: Number, require: false }
});

EmployeeSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

EmployeeSchema.methods.validPassword = async function(candidatePassword) {
    const result = await bcrypt.compare(candidatePassword, this.password)
    return result;
}

module.exports = mongoose.model("emp", EmployeeSchema, "Employees");
module.exports = mongoose.model("empData", EmployeeData, "Employees")



//module.exports = mongoose.model("empData", EmployeeData, "EmployeeRequest")

//let EmployeeData = mongoose.Schema({
// productName: { type: String, required: false },
// quantity: { type: Number, required: false }
//UserName: { type: String, require: false },
//ContactNumber: { type: Number, require: false },
//Address: { any: Schema.Types.Mixed, require: false }
//})