const express = require('express')
const mysql = require ('mysql')

const app = express ();
app.use(express.json());



//mysql 
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root',
    database: 'mysql_nodejs'
})
connection.connect((err) => {
    if (err) {
        console.log("Error connecting to MySQL database =",err)
        return;
    }
    console.log('MySQL successfully connected!');
})

//create router
app.post('/create', async (req, res) => {
    const {imge,NameMo, type, price} = req.body

    try {
        connection.query(
            'INSERT INTO model(imge,NameMo,type,price) VALUES(? ,?,?)',
            [imge,NameMo, type, price],
            (err, results, fields) => {
                if (err) {
                    console.log("Error while inserting a model into the database", err);
                    return res.status(400).send();
                }
                return res.status(201).json({message: "New model success"});
            }
        )
    }catch(err) {
        console.log(err);
        return res.status(500).send();

    }
})

app.get ("/read", async (req, res) => {
    try{
        connection.query("SELECT * FROM model", (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results)
        })
    }catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

//read sigle users from db
app.get ("/read/single/:NameMo", async (req, res) => {
    
    const NameMo = req.params.NameMo;

    try{
        connection.query("SELECT * FROM model WHERE NameMo = ?",[NameMo], (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results)
        })
    }catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

//update data
app.patch("/update/:ID", async (req, res) => {
    const ID = req.params.ID;
    const newName = req.body.newName;
    try{
        connection.query("UPDATE model SET NameMo = ? WHERE ID = ? ",[newName,ID], (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json({message: "Model Name Update success"})
        })
    }catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})
//Delete
app.delete("/delete/:ID", async (req, res) =>{
    const ID = req.params.ID;
    try{
        connection.query("DELETE FROM model WHERE ID = ? ",[ID], (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            if (results.affectedRows === 0) {
               return res.status(404).json({message: "No Model with the store"})
            }
            return res.status(200).json({message: "Model delete success"})
        })
    }catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

app.listen (4300, () => console.log('Server is running on port 4300'))
