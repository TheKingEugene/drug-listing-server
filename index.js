const express = require ("express");
const mysql = require("mysql");
const app = express();
const pool = mysql.createPool({
    host: "localhost",
    user: "foo",
    password: "password",
    database: "drug_listing"
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