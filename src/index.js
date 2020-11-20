require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// CORS
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});

// ROUTES
app.use("/rpc", require("./routes/schedules.routes"));

// SERVER
const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log(`Server listening on port ${PORT} 🚀`));
