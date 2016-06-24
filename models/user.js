var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  assignment_number: Number,
  student_name: {type: String, unique: true},
  score: Number,
  date_completed: Date
});

// first param is the collection name
// second param is the schema you created above
// Reminder: mongo/mongoose will lowercase and pluralize for you.
var User = mongoose.model('users', userSchema);

module.exports = User;
