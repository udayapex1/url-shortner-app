import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import urlRoutes from "./routes/url.routes.js"


dotenv.config();


const mainApp = express();


mainApp.use(express.urlencoded({ extended: true }));

mainApp.use(express.json());

// config Variables form .env
const port = process.env.PORT;

//Connect to DB
connectDB();


// Routes :
mainApp.use("/api", urlRoutes);



mainApp.get("/", (req, res) => {
    res.send("Hello for testing Purpose");
})

mainApp.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
