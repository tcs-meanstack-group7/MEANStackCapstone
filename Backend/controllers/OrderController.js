const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Orders } = require('../models/Orders');

// => localhost:3000/Product/
router.get('/', (req, res) => {
    Orders.find((err, docs) => {
        console.log(docs);
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Raiseticket requests :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    debugger;
    console.log(req.body);
    var Orders = new Orders({
        id: req.body.id,
        emailid: req.body.emailid,
        amount: req.body.amount,
        status : req.body.status,

    });
    Orders.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Request  Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/getOrders', (req, res) => {
    console.log(req.body);
    oid = req.body.id
    Orders.find(({id:oid}),(err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Request Get Orders :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;