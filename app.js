const express = require("express");
const app = express();
const searchRoutes = require("./searchRoutes");
const giftRoutes = require("./giftRoutes");

app.use(express.json());

app.use(searchRoutes); // serves / (but searchRoutes expects '/'
app.use(giftRoutes);

// Ensure /api/search is available
app.use("/api/search", searchRoutes);

module.exports = app;
