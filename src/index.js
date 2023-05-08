const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const offertRoute = require("./routes/offerts");

//setting
const app = express();
const port = process.env.PORT || 8080;

//
app.use(express.json());
app.use("/api/v1", offertRoute);

//routes
app.get("/", (req, res) => {
  res.send("Juan");
});

//mongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));
app.listen(port, () => console.log("listening on", port));
