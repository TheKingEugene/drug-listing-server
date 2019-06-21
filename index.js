require("dotenv").config();
const express = require ("express");
const mysql = require("mysql");
const app = express();
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/chemist/", (req, res) => {
    pool.query("SELECT Business_Number, Chemist FROM chemist", (error, rows) => {
        if (error){
            return res.status(500).json({error});
        }

        res.json(rows);

    });
    
});

app.get("/api/chemist/eugene", (req, res) =>{
    pool.query(
        `select c.chemist, c.location, d.drug, cc.phone_number, bt.working_hours from chemist c 
        JOIN drug d ON d.business_number = c.business_number
        JOIN chemist_contacts cc ON cc.business_number = c.business_number
        JOIN business_time bt ON bt.business_number = c.business_number`,
        (error, rows) => {
            if (error) {
                return res.status(500).json({error});
            }
            res.json(rows);
        }  
    );
});

app.get("/api/drug/", (req, res) =>{
    pool.query(
        `SELECT d.drug, d.description, d.price, c.chemist from drug d
        JOIN chemist c ON c.business_number = d.business_number`,
        (error, rows) =>{
            if (error){
                return res.status(500).json({error});
            }
            res.json(rows);
        }
    );
});

app.post("/api/Chemist/tke", (req, res) =>{
    const Chemist = req.body;
    

    if(!Chemist.Chemist){
        return res.status(400).json({error: "Invalid payload"})
    }
    pool.querry(
        "INSERT INTO Chemist (Chemist) VALUES (?)",
        [Chemist.Chemist],
        (error, results) =>{
            if (error){
                return res.status(500).jason({error});
            }
        res.json(results.insertId);
        }
    );
});

app.put("/api/chemist/id", (req, res) =>{
    const chemist = req.body;

    if (!Chemist.Chemist){
        return res.status(400).json({error: "Invalid payload"});
    }
    pool.query(
        "UPDATE chemist SET ame = ? WHERE id  = ?",
        [chemist.Chemist, re.params.id],
        (error, results) => {
            if (error){
                return res.status(500).json({error});
            }
            res.json(results.changedRows);
        }
    );
});

app.listen(9000, () => console.log("App listening to port 9000"));

