import express from "express"
import booksRouter from "./routes/books.route.js"

const app = express()

//Middlewares 

app.get("/", (req, res) => {
    res.status(200).json({added:"true"})
})

// printing parameters with / in console
// url : http://localhost:8000/1
app.get("/:id", (req, res) => {
    console.log(req.params)

})

//loading Router level middleware
app.use("/books", booksRouter)

//Starting server at 8000
app.listen(8000, ()=>{
    console.log("Server has started.")

})