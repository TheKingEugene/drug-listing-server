require("dotenv").config();
const express = require("express");
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
    pool.query(
        `select c.chemist, c.location, d.drug, cc.phone_number, bt.working_hours from chemist c 
        JOIN drug d ON d.business_number = c.business_number
        JOIN chemist_contacts cc ON cc.business_number = c.business_number
        JOIN business_time bt ON bt.business_number = c.business_number`,
        (error, rows) => {
            if (error) {
                return res.status(500).json({ error });
            }
            res.json(rows);
        }
    );
});

app.get("/api/drug/", (req, res) => {
    pool.query(
        `SELECT d.drug, d.description, d.price, c.chemist from drug d
        JOIN chemist c ON c.business_number = d.business_number`,
        (error, rows) => {
            if (error) {
                return res.status(500).json({ error });
            }
            res.json(rows);
        }
    );
});


app.post("/api/Chemist", (req, res) => {
    const { Chemist, Location, Business_Number } = req.body;

    if (!Chemist && !Location && !Business_Number) {
        return res.status(400).json({ error: "Invalid payload" })
    }
    pool.query(
        "INSERT INTO Chemist (Chemist, Location, Business_Number) VALUES (?, ?, ?)",
        [Chemist, Location, Business_Number],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }

            res.json(results.affectedRows);
        }
    );
});

app.post("/api/Drug", (req, res) => {
    const { Drug, Price, Manufacturer, Description, Drug_Number, Business_Number } = req.body;

    if (!Drug && !Price && !Manufacturer && !Description && !Drug_Number && !Business_Number) {
        return res.status(400).json({ error: "Invalid Payload" })
    }
    pool.query(
        "INSERT INTO Drug (Drug, Price, Manufacturer, Description, Drug_Number, Business_Number) VALUES (? ,? ,? ,? ,? ,?)",
        [Drug, Price, Manufacturer, Description, Drug_Number, Business_Number],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }

            res.json(results.affectedRows);
        }
    );
});

app.post("/api/Business_Time", (req, res) => {
    const { id, Business_Number, Drug_Number, Working_Hours } = req.body;

    if (!id && !Business_Number && !Drug_Number && !Working_Hours) {
        return res.status(400).json({ error: "Invalid Payload" })
    }
    pool.query(
        "INSERT INTO Business_Time (id, Business_Number, Drug_Number, Working_Hours) VALUES (?, ?, ?,?)",
        [id, Business_Number, Drug_Number, Working_Hours],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }

            res.json(results.affectedRows);
        }
    );
});

app.post("/api/Chemist_Contacts", (req, res) => {
    const { Phone_Number, E_Mail, Business_Number } = req.body;

    if (!Phone_Number && !E_Mail && !Business_Number) {
        return res.status(400).json({ error: "Invalid Payload" })
    }
    pool.query(
        "INSERT INTO Chemist_Contacts (Phone_Number. E_Mail, Business_Number) VALUES (?, ?, ?)",
        [Phone_Number, E_Mail, Business_Number],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }
            res.json(results.affectedRows);
        }
    );
});


app.put("/api/Chemist/:Business_Number", (req, res) => {
    const { Chemist, Location} = req.body;

    if (!Chemist || !Location){
        return res.status(400).json({ error: "Invalid payload" });
    }
    pool.query(
        "UPDATE Chemist SET Chemist = ?, Location = ? WHERE Business_Number  = ?",
        [Chemist, Location, req.params.Business_Number],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }
            res.json(results.changedRows);
        }
    );

});

app.put("/api/Drug/:Drug_Number", (req, res) => {
    const { Drug, Price, Manufacturer, Description} = req.body;
    
    if (!Drug || !Price || !Manufacturer || !Description) {
        return res.status(400).json({ error: "Invalid Payload" });
    }
    pool.query(
        "UPDATE Drug SET Drug = ? Price = ?, Manufacturer = ?, Description = ? WHERE Drug_Number = ?",
        [Drug, Price, Manufacturer, Description, res.params.Drug_Number],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }
            res.json(results.changedRows);
        }

    );
});

app.put("/api/Chemist_Contacts/:Phone_Number", (req, res) => {
    const { Phone_Number, E_Mail, Business_Number } = req.body;
    if (!Phone_Number || !E_Mail || !Business_Number) {
        return res.status(400).json({ error: "Invalid Payload" });
    }
    pool.query(
        "UPDATE Chemist_Conatcts SET Phone_Number = ? E_Mail = ?, Business_Number = ? WHERE Phone_Number = ?",
        [Phone_Number, E_Mail, Business_Number, res.params.Drug_Number],
        (error, results) => {
            if (error) {
                return req.status(500).json({ error });
            }
            res.json(results.changedRows);
        }

    );
});

app.put("/api/Business_Time/:Business_Number", (req, res) => {
    const { id, Business_Number, Drug_Number, Working_Hours } = req.body;
    if (!id || !Business_Number || !Drug_Number || !Working_Hours) {
        return res.status(400).json({ error: "Invalid Payload" });
    }
    pool.query(
        "UPDATE Business_Time SET id = ? Business_Number = ? Drug_Number = ? Working_Hours = ? WHERE Business_Number = ?",
        [id, Business_Number, Drug_Number, Working_Hours],
        (error, results) => {
            if (error) {
                return req.status(500).json({ error });
            }
            res.json(results.changedRows);
        }

    );
});


app.delete("api/Chemist/:Business_ Number", (req, res) =>{
    pool.query(
        "DELETE from Chemist WHERE Business_Number = ?",
        [req.parmas.Business_Number],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }
            res.json(results.affectedRows);
        }


    );
});

app.delete("api/Drug/:Drug_ Number", (req, res) =>{
    pool.query(
        "DELETE from Chemist WHERE Drug_Number = ?",
        [req.parmas.Drug_Number],
        (error, results) => {
            if (error) {
                    return res.status(500).json({ error });
            }
            res.json(results.affectedRows);
        }
    );
    
});

app.delete("api/Chemist_Contacts/:Phone_ Number", (req, res) =>{
    pool.query(
        "DELETE from Chemist WHERE Phone_Number = ?",
        [req.parmas.Phone_Number],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }
            res.json(results.affectedRows);
        }


    );
});

app.delete("api/Business_Time/:Business_ Number", (req, res) =>{
    pool.query(
        "DELETE from Chemist WHERE Business_Number = ?",
        [req.parmas.Business_Number],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }
            res.json(results.affectedRows);
        }
    );
});


app.listen(9000, () => console.log("App listening to port 9000"));


