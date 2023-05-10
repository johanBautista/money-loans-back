import { Router } from "express";
import {
  allOffertsUser,
  allfavorites,
  getOffertID,
  newOffert,
  updateOffert,
} from "../controllers/offert.controller.js";

const router = Router();

// offert
router.post("/", newOffert);
router.get("/", allOffertsUser);
router.get("/:id", getOffertID);
router.put("/:id", updateOffert);
router.get("/:id/favorites", allfavorites);

export default router;
