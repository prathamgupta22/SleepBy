import express from "express";
import {
  getSleepSummary,
  startSleepTracking,
} from "../controller/sleeptrack.controller.js";
import isAuthenticated from "../middlewares/user.midlleware.js";

const router = express.Router();

router.post("/start", isAuthenticated, startSleepTracking);
router.get("/summary", isAuthenticated, getSleepSummary);

export default router;
