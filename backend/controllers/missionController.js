import Mission from "../models/Mission.js";

export const createMission = async (req, res) => {
    try {
        const mission = new Mission(req.body);
        await mission.save();
        res.status(200).json(mission);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getMissions = async (req, res) => {
    try {
        const missions = await Mission.find().populate("droneId");
        res.json(missions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
