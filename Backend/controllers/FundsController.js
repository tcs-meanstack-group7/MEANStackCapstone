const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Funds } = require('../models/Funds');

// => localhost:9090/Funds/
router.get('/', (req, res) => {
    console.log("funds");
    Funds.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Raiseticket requests :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    console.log(req.params);
    if (!ObjectId.isValid(req.params.id))
       return res.status(400).send(`No record with given id : ${req.params.id}`);

    Funds.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.post('/', (req, res) => {
    debugger;

    var Fund = new Funds({
        id: req.body.id,
        name: req.body.name,
        Funds: req.body.Funds
    });
    Fund.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Request  Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var Funds = {
        id: req.body.id,
        name: req.body.name,
        Funds: req.body.Funds
    };
    Funds.findByIdAndUpdate(req.params.id, { $set: Funds }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;