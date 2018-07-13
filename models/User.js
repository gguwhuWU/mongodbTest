var mongoose = require( 'mongoose' );
var moment = require( 'moment-timezone' );
moment.tz.setDefault("Asia/Taipei"); // not working
var Schema   = mongoose.Schema;
//var ObjectId = Schema.ObjectId;

//console.log(moment.tz("Asia/Taipei").utc("2017-11-19 18:00").format());

var UserModel = new Schema({
    //_id    : { type: ObjectId },
    name    : String,
    age : Number,
    st : String,
    email: { type: String, unique: false },
    createTime: { type: Date, default: moment().format() }
}, { versionKey: false });

module.exports = UserModel;