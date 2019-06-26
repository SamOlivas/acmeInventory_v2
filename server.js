const path = require('path');
const {syncAndSeed, Inventory, db} = require('./db');
const express = require('express');

const PORT = process.env.PORT || '3000';
const app = express();

app.get( '/', (req, res, next) => {
  res.sendFile(path.join(__dirname,'./index.html'))
})

//Shows all products
app.get('/api/products', async (req, res, next) => {
  try {
    const allProducts = await Inventory.findAll()
    res.send(allProducts)
  }
  catch(er) {
    console.log(er)
    next()
  }
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
