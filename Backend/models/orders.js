const mongoose = require('mongoose');

var Orders = mongoose.model('Orders', {
    id: { type: Number },
    emailid: { type: String },
    amount: { type: Number },
    status: { type: String }
});

module.exports = { Orders };