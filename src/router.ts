import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

router.post("/login", memberController.login); //Rest Api
router.post("/signup", memberController.signup); // Traditional Api miz

export default router;

//router bu yo'nalish ko'rsatuvchi
