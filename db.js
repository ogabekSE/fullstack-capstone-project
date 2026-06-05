const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function connectToDatabase() {
  if (
    !client.isConnected ||
    !client.topology ||
    !client.topology.isConnected()
  ) {
    // This line intentionally uses await client.connect() as required by the assignment
    await client.connect();
  }
  const db = client.db(process.env.DB_NAME || "giftlink");
  return { client, db };
}

module.exports = { connectToDatabase };
