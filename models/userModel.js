
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, 'Please tell us your first name!']
  },
  lname: {
    type: String,
    required: [true, 'Please tell us your last name!']
  },
  age: {
    type: String,
    required: [true, 'Please tell us your']
  },
  
question1: {
    type: String,
    required: [true, 'Please tell us your answer']
  },
  
question2: {
    type: String,
    required: [true, 'Please tell us your answer']
  },
  
question3: {
    type: String,
    required: [true, 'Please tell us your answer']
  },
  resume: {
    type: String,
    required: [true, 'Please upload resume']
  },

});




const User = mongoose.model('User', userSchema);

module.exports = User;
