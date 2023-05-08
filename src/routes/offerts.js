const express = require("express");
const offertSchema = require("../models/offert");

const router = express.Router();

// create offert
router.post("/offerts", (req, res) => {
  const offert = offertSchema(req.body);
  offert
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all offerts
router.get("/offerts", (req, res) => {
  console.log("DATA___>", "res", res.status);
  offertSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//endpoint post favoritos

//endpoint all favoritos

module.exports = router;
