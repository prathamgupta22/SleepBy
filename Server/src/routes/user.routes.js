import express from "express";
import { login, logout, SignUp } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", SignUp);
router.post("/login", login);
router.get("/logout", logout);

export default router;
