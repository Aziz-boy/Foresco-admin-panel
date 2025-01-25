import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

/** Member **/
router.post("/member/login", memberController.login); //Rest Api
router.post("/member/signup", memberController.signup); // Traditional Api miz
router.post(
  "/member/logout",
  memberController.verifyAuth,
  memberController.logout
);
router.get(
  "/member/detail",
  memberController.verifyAuth,
  memberController.getMemberDetail
);

/** Product **/

/** Order **/

export default router;

//router bu yo'nalish ko'rsatuvchi
