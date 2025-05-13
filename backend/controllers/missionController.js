import Mission from "../models/Mission.js";

export const createMission = async (req, res) => {
  try {
    const { missionName, flightPath, altitude } = req.body;
    const mission = new Mission({ missionName, flightPath, altitude });
    await mission.save();
    res.status(201).json(mission);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMissions = async (req, res) => {
  try {
    const missions = await Mission.find();
    res.status(200).json(missions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateMissionStatus = async (req, res) => {
  const { missionId, status } = req.body;
  try {
    const mission = await Mission.findByIdAndUpdate(missionId, { status }, { new: true });
    res.status(200).json(mission);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
