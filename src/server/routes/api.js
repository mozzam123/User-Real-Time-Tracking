const express = require("express");
const router = express.Router();
const PageTransition = require("../models/PageTransition");

router.get("/summarizedData", async (req, res) => {
  try {
    const userId = req.query.userId;
    const dataTime = req.query.dataTime;

    // Check if userId is provided
    if (userId) {
      let query = { userId: userId };

      // Check if dataTime is provided
      if (dataTime) {
        // Set the date range from the beginning to the end of the day
        query.timestamp = {
          $gte: new Date(dataTime),
          $lte: new Date(`${dataTime}T23:59:59.999Z`),
        };
      }

      const transitions = await PageTransition.find(query);
      res.status(200).json({ status: "success", result: transitions });
    } else {
      const allTransitions = await PageTransition.find();
      res.status(200).json({ status: "success", result: allTransitions });
    }
  } catch (error) {
    console.error("Error fetching summarized data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
