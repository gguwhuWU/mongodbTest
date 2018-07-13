var mongoose = require( 'mongoose' );
var UserModel = require('../models/User');
const config = require('../config/mongodbConfig');

var User = mongoose.model( 'User', UserModel );
mongoose.connect( config.connectPath );
// Connect to the db

module.exports = {
    delUsersByName: function (name){
        
        return User
        .remove({ name: name })
        .exec()
        .then(function (data) {
            return  `remove: ${data.n}個`;
        })
        .catch(function (err) {
            console.log('failed: ' + err);
        });
    },
    delUserById: function(id){
        return User
        .findOne({ _id: mongoose.Types.ObjectId(id) })
        .exec()
        .then(function (data) {
            if (data == null)
            {
                throw Error('not found!');
            }
            return User.findByIdAndRemove(id).exec();
        })
        .then(function () {
            return "ok";
        })
        .catch(function (err) {
            console.log('failed: ' + err);
            throw Error(err);
        });

        // return User
        // .findByIdAndRemove(id)
        // .exec()
        // .then(function () {
        //     return "ok";
        // })
        // .catch(function (err) {
        //     console.log('failed: ' + err);
        // });
    },
    UpUser: function(id, userModel){

        return User
        .findOne({ _id: mongoose.Types.ObjectId(id) })
        .exec()
        .then(function (data) {
            if (data == null)
            {
                throw Error('not found!');
            }
            return User.findByIdAndUpdate(id, {$set: userModel}).exec();
        })
        .then(function () {
            return "ok";
        })
        .catch(function (err) {
            console.log('failed: ' + err);
            throw Error(err);
        });

        // return User
        // .findByIdAndUpdate(id, {$set: userModel})
        // .exec()
        // .then(function () {
        //     return "ok";
        // }).
        // catch(function (err) {
        //     console.log('failed: ' + err);
        // });
    },
    AddUsers: function(userModel){
        return User(userModel)
        .save()
        .then(function(users) {
            return users;
        })
        .catch(function(err) {
            console.log("error " + err);
            throw Error(err);
        });
    },
    GetUsers : function(){
        return User
        .find({})
        .sort( 'name' )
        .exec()
        .then(function(users) {
            //return JSON.stringify(users);
            return users;
        })
        .catch(function(err) {
            console.log("error " + err);
            throw Error(err);
        });
    },
    GetUserById : function(id){
        return User
        .findOne({ _id: mongoose.Types.ObjectId(id) })
        .exec()
        .then(function (data) {
            return data;
        })
        .catch(function (err) {
            console.log('failed: ' + err);
            throw Error(err);
        });
    },
    GetUserByName : function(name){
        return User
        .findOne({ name: name })
        .exec()
        .then(function (data) {
            return data;
        })
        .catch(function (err) {
            console.log('failed: ' + err);
            throw Error(err);
        });
    },
}
