const Sequelize = require('sequelize');
const express = require('express');

// Need to install npm modules

const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/acme_inventory'
);

const Inventory = db.define( 'product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM( 'In Stock', 'Backordered', 'Discontinued'),
    defaultValue: 'In stock'
  }
})

const productSeed = [
  {
    name: 'item A',
    status: 'In Stock'
  },
  {
    name: 'item B',
    status: 'Backordered'
  },
  {
    name: 'item C',
    status: 'Discontinued'
  },
  {
    name: 'item D',
    status: 'In Stock'
  },
  {
    name: 'item E',
    status: 'In Stock'
  }
]

// const syncAndSeed = async = () => {
//   try{
//     await db.sync({ force: true });
//     await Promise.all(productSeed.map((product) =>
//     Inventory.create(product)
//     ))
//   }
//   catch(er) {
//     console.log(er)
//   }
// }

//syncAndSeed()

module.exports = {
  db,
  Inventory,
  syncAndSeed
}
