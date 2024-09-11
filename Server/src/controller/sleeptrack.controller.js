import SleepTrack from "../models/sleeptrack.model.js";

// Start sleep tracking
export const startSleepTracking = async (req, res) => {
  try {
    const { issue_duration, bedtime, waketime, sleep_hours } = req.body;

    // Validate required fields
    if (!issue_duration || !bedtime || !waketime || !sleep_hours) {
      return res.status(400).send({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Create the sleep tracking record
    const sleepTracking = await SleepTrack.create({
      user: req.user.id,
      issue_duration,
      bedtime,
      waketime,
      sleep_hours,
    });

    return res.status(201).send({
      success: true,
      message: "Sleep tracking started successfully",
      sleepTracking,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error starting sleep tracking",
      details: error.message,
    });
  }
};

export const getSleepSummary = async (req, res) => {
  try {
    const sleepTracking = await SleepTrack.find({ user: req.user.id });

    if (!sleepTracking.length) {
      return res.status(404).send({
        success: false,
        message: "No sleep tracking data found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Sleep tracking data retrieved successfully",
      sleepTracking,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error retrieving sleep tracking data",
      details: error.message,
    });
  }
};
