import  express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import donationRouter from "./routes/donationRoute.js"
import  loginRouter from './routes/loginRoute.js'
import signupRouter from './routes/signupRoute.js'
import expensesRouter from './routes/expensesRoute.js'
import path from "path";


const app = express();
dotenv.config({path : './config/config.env'});
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
}));
// Serve static files
app.use(express.static(path.resolve('../frontend', 'build')));

// Handle all other routes by serving the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.resolve('../frontend', 'build', 'index.html'));
});

app.use(express.json());
app.use(express.urlencoded({ extended: true}));  
app.use('/', donationRouter)
app.use('/', loginRouter )
app.use('/', signupRouter)
app.use('/', expensesRouter)

dbConnection();
app.use(errorMiddleware);

export default app;