import  express, { urlencoded } from "express";
import path from 'path';
import router from './router';
import routerAdmin from "./router-admin";
import morgan from "morgan";
import {MORGAN_FORMAT} from "./libs/config";
import { T } from './libs/types/common';
import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

const  MongoDBStore =  ConnectMongoDB(session)
const store = new MongoDBStore({ 
    uri: String(process.env.MONGO_URL),
    collection: 'sessions',


});

/*** 1- ENTERENCE ***/
const app = express();
// console.log(__dirname)
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.urlencoded({extended: true})); //Traditional api ni ochib beradi 
app.use(express.json()); //REST api sifatida request bolayotgan json datalarni otkazsihga ruxsta beryapmiz
app.use(morgan(MORGAN_FORMAT));

/*** 2- SESSIONS ***/

app.use(
    session({
       secret: String(process.env.SESSION_SECRET),  
       cookie: {
        maxAge: 1000 * 3600 * 3, // 3 hours
       },
        store: store,
        resave: true,
        saveUninitialized: true
  })
),

app.use(function(req, res, next){
    const sessionInstance = req.session as T;
    res.locals.member = sessionInstance.member;
    next(); 
})

/*** 3- VIEWS ***/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', "ejs");

/*** 4- ROUTERS ***/
app.use('/admin', routerAdmin);//SSR: EJS
app.use('/', router);// SPA: REACT



export default app;