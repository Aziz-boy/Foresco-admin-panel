import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";


/** Member **/
router.post("/member/login", memberController.login); //Rest Api
router.post("/member/signup", memberController.signup); // Traditional Api miz
router.get("/member/detail", memberController.verifyAuth);



/** Product **/




/** Order **/





export default router;



//router bu yo'nalish ko'rsatuvchi
