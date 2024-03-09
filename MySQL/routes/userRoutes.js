import express from "express"
import connection from "../config/connection.js"
const router = express.Router()

//inserts user to the database
router.post("/add", (req, res) => {
    //getting values from request 
    const { username, location } = req.body

    //making a database query using prepared/precompiled statement
    connection.query(
        `INSERT INTO users(username, location) VALUES(?, ?)`,[username, location],
        (error, result, fields) => {
            if (error) throw error;
            console.log(result)

            if (result.affectedRows === 1) {
                res.status(200).json({ success: true, message: "User Added " })
            }
            else {
                res.status(200).json({ success: false, message: "unable to add user" })
            }
        });
})

//read operation 
router.get("/:id", (req, res) => {
    const id = req.params
    if (id) {
        connection.query(
            `SELECT * FROM users WHERE id=?`,[id],
            (err, results, fields) => {
                console.log(results)
            })
    }
    else {
        res.status(200).json({ success: false, message: "userid not found" })
    }
    console.log(id)
})


//update the user
router.put("/update/:id", (req, res) => {
    const id = req.params.id

    if (id) {
        const { username, location } = req.body
        //query to update the data 
    }
    else {
        // success:false logic
    }
})


//delete the user
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id
    
    if (id) {
        //query to delete the user
    }
    else {
        // success:false logic
    }
})


export default router