var express = require('express');
var router = express.Router();
var repository = require('../repository/mongoDbTest');
var UserModel = require('../models/User');

router.get('/test', function(req, res, next) {
    res.send("test ok!");
});

router.get('/', function(req, res, next) {
    repository.GetUsers()
    .then(function (result) {
        res.send(result);
    }).catch(function (err) {
        res.status(500).send(err.message);
    });
});

router.get('/:id', function(req, res, next) {
    repository.GetUserById(req.params.id)
    .then(function (result) {
        res.send(result);
    }).catch(function (err) {
        res.status(500).send(err.message);
    });
});

router.get('/:name/Name', function(req, res, next) {
    repository.GetUserByName(req.params.name)
    .then(function (result) {
        res.send(result);
    }).catch(function (err) {
        res.status(500).send(err.message);
    });
});

router.delete('/:id', function(req, res, next) {
    repository.delUserById(req.params.id)
    .then(function (result) {
        res.send(result);
    }).catch(function (err) {
        res.status(500).send(err.message);
    });
});

router.delete('/:name/name', function(req, res, next) {
    repository.delUsersByName(req.params.name)
    .then(function (result) {
        res.send(result);
    }).catch(function (err) {
        res.status(500).send(err.message);
    });
});

router.put('/:id', function(req, res, next) {

    var newUserModel = Object.assign({}, UserModel);
    newUserModel.name = req.body.name;
    newUserModel.age = req.body.age;
    newUserModel.st = req.body.st;  
    newUserModel.email =  req.body.email;

    repository.UpUser(req.params.id, newUserModel)
    .then(function (result) {
        res.send(result);
    }).catch(function (err) {
        res.status(500).send(err.message);
    });
});

router.post('/', function(req, res, next) {

    //deep copy (兩種都可以)
    var newUserModel = Object.assign({}, UserModel);
    //var newUserModel = JSON.parse(JSON.stringify(UserModel))

    newUserModel.name = req.body.name;
    newUserModel.age = req.body.age;
    newUserModel.st = req.body.st;  
    newUserModel.email =  req.body.email;

    repository.AddUsers(newUserModel)
    .then(function (result) {
        res.send(result);
    }).catch(function (err) {
        res.status(500).send(err.message);
    });
});

module.exports = router;