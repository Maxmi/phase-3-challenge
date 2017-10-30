COPY items (name, price, section) 
FROM ('items.csv' DELIMITER ',' CSV HEADER;);

INSERT INTO shoppers (name) VALUES 
('Mira'),
('Sato'),
('Aika'),
('Naz'),
('Sima');

INSERT INTO orders () VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);