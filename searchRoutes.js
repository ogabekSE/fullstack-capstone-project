const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("./db");

// Filter items by category: /api/search?category=books
router.get("/", async (req, res) => {
  const { db } = await connectToDatabase();
  const category = req.query.category;
  const filter = {};
  if (category) filter.category = category;
  const results = await db.collection("gifts").find(filter).toArray();
  res.json(results);
});

module.exports = router;
