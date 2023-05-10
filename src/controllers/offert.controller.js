import { Offert } from "../models/Offert.js";

export const newOffert = async (req, res) => {
  try {
    const offert = new Offert(req.body);
    await offert.save();
    return res.json({ success: "Offert create 🦠" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const allOffertsUser = async (req, res) => {
  try {
    const offerts = await Offert.find();
    res.json({ offerts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const getOffertID = async (req, res) => {
  try {
    const offert = await Offert.findById(req.params.id);

    if (!offert) return res.status(404).json({ error: "No existe esta oferta" });

    return res.json({ offert });
  } catch (error) {
    console.log(error);
    if (error.kind === "ObjectId") {
      res.status(404).json({ error: "Formato id incorrecto" });
    }
    res.status(500).json({ error: error });
  }
};

export const updateOffert = async (req, res) => {
  try {
    const { id } = req.params;
    const { favorite } = req.body;
    const offert = await Offert.findById(req.params.id);

    if (!offert) return res.status(404).json({ error: "oferta no encontrada" });

    const updateOffert = await Offert.findByIdAndUpdate(id, { favorite }, { new: true });

    return res.json({ offert: updateOffert });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const allfavorites = async (req, res) => {
  try {
    const offerts = await Offert.find({ favorite: true });
    return res.send({ offerts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
