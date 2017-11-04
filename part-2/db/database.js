const pg_options = {};
const pgp = require('pg-promise')(pg_options); 

const connectionOptions = {
  host: 'localhost',
  port: 5432,
  database: process.env.NODE_ENV === 'test' ? 'grocery_store_test' : 'grocery_store'
};

const db = pgp(connectionOptions);

//query functions 
const getItemsFromSection = section => {
  return db.any(`SELECT name AS product_name, section FROM items WHERE section = $1`, [section])
};

const getAllOrders = shopper_id => {
  return db.any(`
    SELECT (orders.order_id), sum(price) AS total_cost 
    FROM order_item 
    JOIN items 
    ON order_item.item_id = items.id 
    INNER JOIN orders 
    ON orders.order_id = order_item.order_id 
    WHERE shopper_id = $1 
    GROUP BY orders.order_id;
    `, [shopper_id])
};

const realShoppers = () => {
  return db.any (
    `SELECT shopper_name, 
     COUNT(order_id) AS number_of_orders 
     FROM orders 
     JOIN shoppers 
     ON orders.shopper_id = shoppers.shopper_id 
     GROUP BY shopper_name;`
  )
};

const getNamesAndTotalOrders = () => {
  return db.any(
    `SELECT shopper_name, sum(price) AS total_order
     FROM shoppers
     JOIN orders 
     ON shoppers.shopper_id = orders.shopper_id
     INNER JOIN order_item
     ON orders.order_id = order_item.order_id
     JOIN items
     ON items.id = order_item.item_id
     GROUP BY shopper_name
     ORDER BY total_order desc;
    `
  )
};

const closeConnection = () => {
  pgp.end();
};

module.exports = {
  closeConnection,
  getItemsFromSection,
  getAllOrders,
  realShoppers,
  getNamesAndTotalOrders
}