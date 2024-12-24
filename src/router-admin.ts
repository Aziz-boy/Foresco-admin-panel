import  express  from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
//router instansidan foydalanib biz get post methodlarini amalga oshirishimiz mumkin 



/*** Restaurant ***/

routerAdmin.get('/', restaurantController.goHome);

routerAdmin
    .get('/login', restaurantController.getLogin)
    .post('/login', restaurantController.processLogin); //Rest Api
routerAdmin
    .get('/signup', restaurantController.getSignup)
    .post("/signup", restaurantController.processSignup);// Traditional Api miz 
routerAdmin.get('/logout', restaurantController.logout)
routerAdmin.get('/check-me', restaurantController.checkAuthSession)    


/*** Product ***/    

/*** User ***/   

export default routerAdmin; 

//router bu yo'nalish ko'rsatuvchi