import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
import uploader from "./libs/utils/uploader";

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

router.post(
  "/member/update",
  memberController.verifyAuth,
  uploader("members").single("memberImage"),
  memberController.updateMember
);

router.get("/member/top-users", memberController.getTopUsers);
/** Product **/

/** Order **/

export default router;

//router bu yo'nalish ko'rsatuvchi
