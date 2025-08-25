const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  headDoctor: { type: String }, // tên trưởng khoa
  phone: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Department", departmentSchema);
