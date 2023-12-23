const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const PageTransition = require("../models/PageTransition");

router.get("/summarizedData", async (req, res) => {
  try {
    res.json({message: "hit the righht endnpint"})
    // ... (similar to the previous example)
  } catch (error) {
    console.error("Error fetching summarized data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
