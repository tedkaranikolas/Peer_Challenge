var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  assignment_number: Number,
  student_name: {type: String}, //, unique: true
  score: Number,
  date_completed: Date
});

var User = mongoose.model('users', userSchema);

module.exports = User;
