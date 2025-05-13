import Report from "../models/Report.js";

export const createReport = async (req, res) => {
  try {
    const { missionId, droneId, duration, distance, coverage } = req.body;
    const report = new Report({ missionId, droneId, duration, distance, coverage });
    await report.save();
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
