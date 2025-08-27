const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name: String,
  description: String,
  floor: Number,
});

module.exports = mongoose.model("Department", departmentSchema);
