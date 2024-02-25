// Handling requests for /books

import express from "express"

const router = express.Router()

// for /books
router.get("/", (req,res)=>{

    res.status(200).send("true")
})


// for /books/add
router.get("/add", (req,res)=>{

    res.status(200).send("add endpoint is here")
    
    // printing request query in console
    //url: localhost:8000/books/add?id=1&name=a
    const { id, name } = req.query
    console.log(id, name)

})



export default router