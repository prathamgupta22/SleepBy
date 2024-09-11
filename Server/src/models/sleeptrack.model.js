import mongoose from "mongoose";

const sleepTrackSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    issue_duration: {
      type: String,
      enum: ["Less than 2 weeks", "2 to 8 weeks", "More than 8 weeks"],
      required: true,
    },
    bedtime: {
      type: String,
      required: true,
    },
    waketime: {
      type: String,
      required: true,
    },
    sleep_hours: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const SleepTrack = mongoose.model("SleepTrack", sleepTrackSchema);

export default SleepTrack;
