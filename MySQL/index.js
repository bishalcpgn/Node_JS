import express from "express"
// import mysql from "mysql2"
import userRouter from "./routes/userRoutes.js"


const app = express()
app.use(express.json())

app.use("/user", userRouter)

app.listen(8000, () => {
    console.log("Server has started.")
})