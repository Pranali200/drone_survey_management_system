import Drone from "../models/Drone.js";

export const createDrone = async (req, res) => {
  try {
    const { droneId, model, status, battery } = req.body;
    const drone = new Drone({ droneId, model, status, battery });
    await drone.save();
    res.status(201).json(drone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDrones = async (req, res) => {
  try {
    const drones = await Drone.find();
    res.status(200).json(drones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDroneStatus = async (req, res) => {
  const { droneId, status } = req.body;
  try {
    const drone = await Drone.findByIdAndUpdate(droneId, { status }, { new: true });
    res.status(200).json(drone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
