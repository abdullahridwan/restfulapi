const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
  "name": {
    type: String,
    required: true
  },
  "workouts": {
    type: String,
    required: true
  }
});


module.exports = mongoose.model("userSchema", userSchema)