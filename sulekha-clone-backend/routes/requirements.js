const express = require("express");
const router = express.Router();
const Requirement = require("../models/Requirement");

router.post("/", async (req, res) => {
  try {
    const { name, service, contact } = req.body;
    const reqObj = new Requirement({ name, service, contact });
    await reqObj.save();
    res.status(201).json({ message: "Requirement posted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to post requirement" });
  }
});

module.exports = router;