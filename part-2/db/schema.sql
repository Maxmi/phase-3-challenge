-- Requirements:
-- as a shopper I can fetch all my orders
-- as a shopper I can have multiple items in an orders
-- assume the quantity of each item is always 1

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  price INTEGER NOT NULL,
  section TEXT NOT NULL 
);

-- each shopper can have many orders

CREATE TABLE shoppers (
  shopper_id SERIAL PRIMARY KEY,
  shopper_name TEXT NOT NULL,
  -- order_id INTEGER REFERENCES orders  
)

-- each order can have many items

CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  shopper_id REFERENCES shoppers, 
  -- item_id REFERENCES grocery_items --how to store many items in one order ?
)

