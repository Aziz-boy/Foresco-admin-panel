import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";
//router instansidan foydalanib biz get post methodlarini amalga oshirishimiz mumkin 



/*** Restaurant ***/

routerAdmin.get('/', restaurantController.goHome);

routerAdmin.get('/login', restaurantController.getLogin).post('/login', restaurantController.processLogin);  //Rest Api

routerAdmin.get('/signup', restaurantController.getSignup).post("/signup", makeUploader("members").single("memberImage"), 
restaurantController.processSignup
); // Traditional Api miz 


routerAdmin.get('/logout', restaurantController.logout);

routerAdmin.get('/check-me', restaurantController.checkAuthSession);    


/*** Product ***/    
routerAdmin.get(
    '/product/all', 
    restaurantController.verifyRestaurant, 
    productController.getAllProducts
);

routerAdmin.post('/product/create', 
    restaurantController.verifyRestaurant, 
    // uploadProductImage.single("productImage"),
    makeUploader("products").array("productImages", 5),
    productController.createNewProduct
);

routerAdmin.post('/product/:id', 
    restaurantController.verifyRestaurant,  
    productController.updateChosenProduct
);

/*** User ***/   

routerAdmin.get('/user/all', restaurantController.verifyRestaurant, restaurantController.getUsers);

export default routerAdmin; 

//router bu yo'nalish ko'rsatuvchi