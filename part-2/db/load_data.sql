\COPY items (name, price, section) FROM './db/items.csv' DELIMITER ',' CSV HEADER;

INSERT INTO shoppers (shopper_name) VALUES 
('Mira'), ('Sato'), ('Aika'), ('Naz'), ('Sima');

--only four shoppers made orders so far
INSERT INTO orders (shopper_id) VALUES
(5), (2), (3), (1), (2), (5), (3), (3), (1), (1);

--orders and items on those orders 
INSERT INTO order_item (order_id, item_id) VALUES 
(2, 5), (1, 15), (2, 10), (3, 18), (2, 4),
(7, 6), (6, 13), (10, 1), (9, 8), (5, 24),
(4, 25), (8, 30), (9, 19), (4, 14), (6, 14);
