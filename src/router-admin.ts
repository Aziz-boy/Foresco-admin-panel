import  express  from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
//router instansidan foydalanib biz get post methodlarini amalga oshirishimiz mumkin 



/*** Restaurant ***/

routerAdmin.get('/', restaurantController.goHome);
routerAdmin
    .get('/login', restaurantController.getLogin)
    .post('/login', restaurantController.processLogin);
routerAdmin
    .get('/signup', restaurantController.getSignup)
    .post("/signup", restaurantController.processSignup);



/*** Product ***/    

/*** User ***/   

export default routerAdmin; 

//router bu yo'nalish ko'rsatuvchi