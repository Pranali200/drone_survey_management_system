import express from "express";
import { createDrone, getDrones, updateDroneStatus } from "../controllers/droneController.js";

const router = express.Router();

router.post("/", createDrone);
router.get("/", getDrones);
router.put("/status", updateDroneStatus);

export default router;
