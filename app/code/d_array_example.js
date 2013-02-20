var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DSchema = new Schema({
    surname: {type: String, list:{}},
    forename:  {type: String, list:true},
    weight: {type : Number, form:{label:"Weight (lbs)"}},
    dateOfBirth: Date,
    accepted: Boolean,
    specialSubjects: [String],
});

var D = mongoose.model('D', DSchema);

module.exports = D;

