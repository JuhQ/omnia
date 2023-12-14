
CREATE TABLE members (
  id SERIAL PRIMARY KEY,
  username VARCHAR(320) NOT NULL,
  password CHAR(60) NOT NULL
);

CREATE UNIQUE INDEX ON members((lower(username)));

CREATE TABLE tweets (
    id SERIAL PRIMARY KEY,
    sender TEXT,
    message TEXT,
    date TEXT,
    img TEXT
);
