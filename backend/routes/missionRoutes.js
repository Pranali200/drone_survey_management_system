import express from "express";
import { createMission, getMissions, updateMissionStatus } from "../controllers/missionController.js";

const router = express.Router();

router.post("/", createMission);
router.get("/", getMissions);
router.put("/status", updateMissionStatus);

export default router;
