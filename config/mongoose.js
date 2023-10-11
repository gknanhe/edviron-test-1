const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://assignment:edviron@cluster0.ebxruu8.mongodb.net",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

module.exports = db;
