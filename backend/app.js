import  express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import donationRouter from "./routes/donationRoute.js"
import  loginRouter from './routes/loginRoute.js'
import signupRouter from './routes/signupRoute.js'
import expensesRouter from './routes/expensesRoute.js'


const app = express();
dotenv.config({path : './config/config.env'});
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));  
app.use('/', donationRouter)
app.use('/', loginRouter )
app.use('/', signupRouter)
app.use('/', expensesRouter)

dbConnection();
app.use(errorMiddleware);

export default app;