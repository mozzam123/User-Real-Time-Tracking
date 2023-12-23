const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const PageTransition = require("../models/PageTransition");

router.get("/summarizedData", async (req, res) => {
  try {
    const userId = req.query.userId;

    const allTransitons = await PageTransition.find({ userId: userId });
    res.status(200).json({ status: "success", result: allTransitons });
  } catch (error) {
    console.error("Error fetching summarized data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
