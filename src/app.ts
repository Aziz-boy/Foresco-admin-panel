import  express, { urlencoded } from "express";
import path from 'path';
import router from './router';


/*** 1- ENTERENCE ***/
const app = express();
// console.log(__dirname)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true})); //Traditional api ni ochib beradi 
app.use(express.json()); //REST api sifatida request bolayotgan json datalarni otkazsihga ruxsta beryapmiz

/*** 2- SESSIONS ***/

/*** 3- VIEWS ***/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', "ejs");

/*** 4- ROUTERS ***/
app.use('/', router); 



export default app;