CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);
CREATE TABLE phone_numbers (
  id SERIAL PRIMARY KEY,
  name_id INTEGER REFERENCES users(id),
  number TEXT NOT NULL
);
INSERT INTO users (name) VALUES ('Juha');
INSERT INTO phone_numbers (name_id, number) VALUES (1, '000-123456789');

CREATE TABLE tweets (
    id SERIAL PRIMARY KEY,
    sender TEXT,
    message TEXT,
    date TEXT,
    img TEXT
);