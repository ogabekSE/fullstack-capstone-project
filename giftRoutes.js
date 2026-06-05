const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("./db");

router.get("/api/gifts", async (req, res) => {
  const { db } = await connectToDatabase();
  const gifts = await db.collection("gifts").find({}).toArray();
  res.json(gifts);
});

router.get("/api/gifts/:id", async (req, res) => {
  const { db } = await connectToDatabase();
  const id = req.params.id;
  const gift = (await db.collection("gifts").findOne({ _id: id })) || null;
  if (!gift) return res.status(404).json({ error: "Not found" });
  res.json(gift);
});

module.exports = router;
