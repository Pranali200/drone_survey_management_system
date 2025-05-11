// services/droneService.js

const Drone = require("../models/Drone");
const Mission = require("../models/Mission");

exports.assignDroneToMission = async (missionId) => {
  try {
    const availableDrone = await Drone.findOne({ status: "available" }).sort({ battery: -1 });
    if (!availableDrone) throw new Error("No drones available for assignment");

    availableDrone.status = "in-mission";
    await availableDrone.save();

    await Mission.findByIdAndUpdate(missionId, { droneId: availableDrone._id });

    return availableDrone;
  } catch (err) {
    throw err;
  }
};

exports.updateDroneStatus = async (droneId, status, battery, coordinates) => {
  try {
    const updatedDrone = await Drone.findByIdAndUpdate(
      droneId,
      {
        status,
        battery,
        location: {
          type: "Point",
          coordinates,
        },
      },
      { new: true }
    );

    return updatedDrone;
  } catch (err) {
    throw err;
  }
};

exports.getDroneStats = async () => {
  const total = await Drone.countDocuments();
  const inMission = await Drone.countDocuments({ status: "in-mission" });
  const available = await Drone.countDocuments({ status: "available" });

  return { total, inMission, available };
};
