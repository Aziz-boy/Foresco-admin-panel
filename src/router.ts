import  express  from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
//router instansidan foydalanib biz get post methodlarini amalga oshirishimiz mumkin 

router.get('/', memberController.goHome)

router.get('/login', memberController.getLogin)

router.get('/signup', memberController.getSignup)

export default router;

//router bu yo'nalish ko'rsatuvchi