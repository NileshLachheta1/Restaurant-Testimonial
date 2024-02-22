import mongoose from "mongoose";

var contactSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default : new Date()
  }
});

export default mongoose.model('contactSchema',contactSchema,'contact');