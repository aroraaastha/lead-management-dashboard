import express from "express";
import Lead from "../models/Lead.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find();
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
