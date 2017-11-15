/*let mongoose = require('mongoose');

let schema = mongoose.schema;

let firstSchema = new Schema({
	name: String
})

module.exports = student;*/

var mongoose=require('mongoose');
module.exports= mongoose.model('student', {
	name: String
});