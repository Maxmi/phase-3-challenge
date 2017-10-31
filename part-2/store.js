#!/usr/bin/env node

//implement product-list command
//implement shopper-orders command
//implement real-shoppers command 
//
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
  // const header = '\nProduct Name | Section\n';
  // const data = res.map(product => `${product.name} | ${product.section}\n`).join(' ');
  // console.log(`${header} ${data}`);
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