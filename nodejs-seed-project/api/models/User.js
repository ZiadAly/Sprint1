var mongoose = require('mongoose'); //refering mongoose for creating user friendly class type model.
//defining schema for user model
const userSchema =  mongoose.Schema({
    name: {
    type:  String,
    required: true,
    trim: true,
  },
    password: {
      type: String,
      requried: true,
      trim: true,
    }
    //email: String,
    //role: String,
  //  created_at: {type: Date, default: Date.now}

});
mongoose.model('User', userSchema);
