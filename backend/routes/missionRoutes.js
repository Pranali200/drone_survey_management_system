import express from "express";
import { createMission, getMissions } from "../controllers/missionController.js";

const router = express.Router();

router.post("/", createMission);
router.get("/", getMissions);

export default router;
