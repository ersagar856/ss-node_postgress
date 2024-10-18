import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})
connectDB()
.then(() => {
    app.listen(process.env.PGPORT || 5432, () => {
        console.log(`Server is running at port : ${process.env.PGPORT}`);
    })
})
.catch((err) => {
    console.log("PostgresSql db connection failed !!! ", err);
})