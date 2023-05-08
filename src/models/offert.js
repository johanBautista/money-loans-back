import mongoose from "mongoose";
const { Schema, model } = mongoose;

const offertSchema = new Schema({
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

export const Offert = model("Offert", offertSchema);
