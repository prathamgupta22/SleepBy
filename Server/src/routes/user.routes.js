import express from "express";
import { login, SignUp } from "../controller/user.controller.js";
import isAuthenticated from "../middlewares/user.midlleware.js";

const router = express.Router();

router.post("/signup", SignUp);
router.post("/login", login);
router.get("/user-auth", isAuthenticated, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
