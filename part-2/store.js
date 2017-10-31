#!/usr/bin/env node
const asciitable = require('asciitable');
const {
  closeConnection,
  getItemsFromSection,
  getAllOrders,
  realShoppers
} = require('./db/database');

const command = process.argv[2];
const id = process.argv[3];
const section = process.argv[3];
const renderResult = res => {
  console.log(asciitable(res));
};

switch (command) {
  case 'product-list':
    getItemsFromSection(section)
      .then(res => {
        renderResult(res);
        closeConnection();
      })
      .catch(error => {
        console.log(error.message);
      });
    break;
  case 'shopper-orders':
    getAllOrders(id)
      .then(res => {
        renderResult(res);
        closeConnection();
      })
      .catch(error => {
        console.log(error.message);
      });
    break;
  case 'real-shoppers':
    realShoppers()
      .then(res => {
        renderResult(res);
        closeConnection();
      })
      .catch(error => {
        console.log(error.message);
      });
    break;
  default:
    console.log('Command not recognized');
}