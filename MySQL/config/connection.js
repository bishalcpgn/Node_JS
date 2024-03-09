import mysql from "mysql2"

//Create connection to the database when server starts
connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bishal12345",
    database: "test_db"
})

export default connection 

//connection is used in userRoutes.js