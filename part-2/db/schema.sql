-- Requirements:
-- as a shopper I can fetch all my orders
-- as a shopper I can have multiple items in an orders
-- assume the quantity of each item is always 1

DROP TABLE IF EXISTS items CASCADE;
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  price NUMERIC NOT NULL,
  section TEXT NOT NULL 
);

-- each shopper can have many orders
DROP TABLE IF EXISTS shoppers CASCADE;
CREATE TABLE shoppers (
  shopper_id SERIAL PRIMARY KEY,
  shopper_name TEXT NOT NULL
);

-- each order can have many items
DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  shopper_id INTEGER REFERENCES shoppers (shopper_id)
);

-- how to store many items in one order? 
DROP TABLE IF EXISTS order_item CASCADE;
CREATE TABLE order_item (
  order_item_id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders (order_id),
  item_id INTEGER REFERENCES items (id)
);
