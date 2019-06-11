const express = require ("express");
const mysql = require("mysql");
const app = express();
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

app.get("/api/chemist", (req, res) => {
    //fetching from chemist
    pool.query("SELECT Business_Number, Name FROM chemist", (error, rows) => {
        if (error){
            return res.status(500).json({error});
        }

        res.json(rows);

    });
    
});

app.listen(9000, () => console.log("App listening to port 9000"));