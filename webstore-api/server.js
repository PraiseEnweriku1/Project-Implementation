const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json()); 


const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});


app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/api/cart', (req, res) => {

  const { productId, quantity } = req.body;
  const sql = 'INSERT INTO cart (product_id, quantity) VALUES (?, ?)';
  db.query(sql, [productId, quantity], (err, result) => {
    if (err) throw err;
    res.status(201).send('Product added to cart');
  });
});

app.get('/api/products/:category', (req, res) => {
    const { category } = req.params;
    const sql = 'SELECT * FROM products WHERE category = ?';
    db.query(sql, [category], (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});