import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
const port = 3000;

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'classicmodels'
});
app.get('/question1', async (req, res) => {
    try{
         const [rows]=await pool.query("SELECT COUNT(*) FROM customers WHERE country = 'France';")
        res.json(rows);
    }
   catch(error){
        res.status(500).json({ error: "Database error" });
   }
});
app.get('/question2', async (req, res) => {
    try{
         const [rows]=await pool.query("SELECT lastName, firstName FROM employees WHERE reportsTo = 1143;")
        res.json(rows);
    }
    catch(error)
    {
        res.status(500).json({ error: "Database error" });

    }
});

app.get('/question3', async (req, res) => {
    try{
         const [rows]=await pool.query("SELECT COUNT(*) FROM products WHERE productLine = 'Classic Cars' AND quantityInStock > 0;")
        res.json(rows);

    }
   catch(error){
            res.status(500).json({ error: "Database error" });
   }
});
app.get('/bonus1', async (req, res) => {
    try{
        const[rows]=await pool.query("SELECT COUNT(*) FROM orders;")
        res.json(rows);
    }
    catch(error){
         res.status(500).json({ error: "Database error" });
    }

});

app.get('/bonus2', async (req, res) => {
    try{
        const[rows]=await pool.query("SELECT COUNT(*) FROM customers WHERE country = 'USA';")
        res.json(rows);
    }
    catch(error){
         res.status(500).json({ error: "Database error" });
    }

});

app.get('/bonus3', async (req, res) => {
    try{
        const[rows]=await pool.query("SELECT MAX(amount) FROM payments;")
        res.json(rows);
    }
    catch(error){
         res.status(500).json({ error: "Database error" });
    }

});
app.get('/bonus4', async (req, res) => {
    try{
        const[rows]=await pool.query("SELECT firstName, lastName FROM employees WHERE jobTitle = 'Sales Rep';")
        res.json(rows);
    }
    catch(error){
         res.status(500).json({ error: "Database error" });
    }

});

app.get('/bonus5', async (req, res) => {
    try{
        const[rows]=await pool.query("SELECT AVG(creditLimit FROM customers;")
        res.json(rows);
    }
    catch(error){
         res.status(500).json({ error: "Database error" });
    }

});




app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

