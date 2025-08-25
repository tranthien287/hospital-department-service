const express = require("express");
const Department = require("../models/Department");
const router = express.Router();

// Thêm khoa mới
router.post("/", async (req, res) => {
  try {
    const newDepartment = new Department(req.body);
    await newDepartment.save();
    res.status(201).json(newDepartment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Lấy danh sách khoa
router.get("/", async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Lấy thông tin khoa theo ID
router.get("/:id", async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    if (!department) return res.status(404).json({ error: "Not found" });
    res.json(department);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Cập nhật khoa
router.put("/:id", async (req, res) => {
  try {
    const updated = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Xóa khoa
router.delete("/:id", async (req, res) => {
  try {
    await Department.findByIdAndDelete(req.params.id);
    res.json({ message: "Department deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
