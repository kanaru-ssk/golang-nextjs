CREATE TABLE IF NOT EXISTS todos(
  id SERIAL PRIMARY KEY,
  text VARCHAR (255),
  done BOOL DEFAULT FALSE,
  user_id VARCHAR (255)
);