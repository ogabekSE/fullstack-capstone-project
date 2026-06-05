const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("./db");

// Register
router.post("/api/auth/register", async (req, res) => {
  const { db } = await connectToDatabase();
  const user = req.body;
  const result = await db.collection("users").insertOne(user);
  res.json({ insertedId: result.insertedId });
});

// Login (very simple example)
router.post("/api/auth/login", async (req, res) => {
  const { db } = await connectToDatabase();
  const { email } = req.body;
  const user = await db.collection("users").findOne({ email });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  // return a fake token for demonstration
  res.json({ token: "fake-jwt-token", user });
});

// Update user
router.put("/api/auth/user", async (req, res) => {
  const { db } = await connectToDatabase();
  const { email, updates } = req.body;
  const result = await db
    .collection("users")
    .findOneAndUpdate(
      { email },
      { $set: updates },
      { returnDocument: "after" },
    );
  res.json(result.value);
});

module.exports = router;
