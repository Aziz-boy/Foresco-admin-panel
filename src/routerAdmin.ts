import  express  from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
//router instansidan foydalanib biz get post methodlarini amalga oshirishimiz mumkin 

routerAdmin.get('/', restaurantController.goHome)

routerAdmin.get('/login', restaurantController.getLogin)

routerAdmin.get('/signup', restaurantController.getSignup)

export default routerAdmin;

//router bu yo'nalish ko'rsatuvchi