const mongoose = require("mongoose");

const offertSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  import: {
    type: Number,
    required: true,
  },
  tin: {
    type: Number,
    required: true,
  },
  favorite: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Offert", offertSchema);
