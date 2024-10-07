const mongoose = require("mongoose");

// Define the User Schema with complex fields
const userSchema = new mongoose.Schema({
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: false,
  },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model
const User = mongoose.model("User", userSchema);

module.exports = User;
