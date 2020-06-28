const express = require("express");
const server = express();
const mongoose = require("mongoose");

// connect to the database
mongoose.connect(`mongodb://localhost:27017/authenticated-blog`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// open the connection

const connection = mongoose.connection;

connection.once("open", () => console.log("MongoDB connection established."));

const PORT = process.env.port || 4000;
server.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}`)
);

module.exports = router;
