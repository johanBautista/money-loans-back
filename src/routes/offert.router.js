import { Router } from "express";
import { allOffertsUser, getOffertID, newOffert, updateOffert } from "../controllers/offert.controller.js";

const router = Router();

// offert
router.post("/", newOffert);
router.get("/", allOffertsUser);
router.get("/:id", getOffertID);
router.put("/:id", updateOffert);

export default router;
