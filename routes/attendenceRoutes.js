import express from "express";
import { Mark } from "../controllers/attendenceController.js";

const router = express.Router();

router.post("/mark", Mark);

export default router;