-- DROP DATABASE command is used to remove a database from the database server. This command checks if the database "ecommerce_db" exists. If it does, it will drop the database. This ensures that any existing "ecommerce_db" database is removed before creating a new one.
DROP DATABASE IF EXISTS ecommerce_db;


-- CREATE DATABASE ecommerce_db; command creates a new database named "ecommerce_db" if it doesn't already exist. It initializes an empty database with the specified name.
CREATE DATABASE ecommerce_db;

