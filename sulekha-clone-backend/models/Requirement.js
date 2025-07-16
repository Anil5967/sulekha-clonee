const mongoose = require("mongoose");

const requirementSchema = new mongoose.Schema({
  name: String,
  service: String,
  contact: String,
}, { timestamps: true });

module.exports = mongoose.model("Requirement", requirementSchema);