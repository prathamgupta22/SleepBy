import SleepTrack from "../models/sleeptrack.model.js";

// Start sleep tracking
export const startSleepTracking = async (req, res) => {
  try {
    let { issue_duration, bedtime, waketime, sleep_hours } = req.body;

    bedtime = timeToISODate(bedtime);
    waketime = timeToISODate(waketime);

    // Validate required fields
    if (!issue_duration || !bedtime || !waketime || !sleep_hours) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Create the sleep tracking record
    const sleepTracking = await SleepTrack.create({
      user: req.user._id,
      issue_duration,
      bedtime,
      waketime,
      sleep_hours,
    });

    return res.status(201).json({
      success: true,
      message: "Sleep tracking started successfully",
      sleepTracking,
    });
  } catch (error) {
    console.error("Error starting sleep tracking:", error.message);
    return res.status(500).json({
      success: false,
      message: "Error starting sleep tracking",
      details: error.message,
    });
  }
};
function timeToISODate(timeStr) {
  // Split the time string into hours and minutes
  const [hours, minutes] = timeStr.split(":").map(Number);

  // Create a new date object with the current date and the given time
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(0);
  date.setMilliseconds(0);

  // Return the ISO string for the time
  return date.toISOString();
}

// Get sleep summary
export const getSleepSummary = async (req, res) => {
  try {
    console.log("User ID:", req.user._id);
    const sleepTracking = await SleepTrack.find({ user: req.user._id });

    if (!sleepTracking.length) {
      return res.status(404).json({
        success: false,
        message: "No sleep tracking data found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Sleep tracking data retrieved successfully",
      sleepTracking,
    });
  } catch (error) {
    console.error("Error retrieving sleep tracking data:", error.message);
    return res.status(500).json({
      success: false,
      message: "Error retrieving sleep tracking data",
      details: error.message,
    });
  }
};
