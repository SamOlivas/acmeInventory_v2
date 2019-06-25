const path = require('path');
const {syncAndSeed, Inventory, db} = require('./db');
const express = require('express');

const PORT = process.env.PORT || '3000';
const app = express();

app.get( '/', (req, res, next) => {
  res.sendFile('./index')
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
