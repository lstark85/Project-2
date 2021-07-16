-- Drop tables
DROP TABLE weather;
DROP TABLE accidents;

-- Create table
CREATE TABLE weather (
	date DATE, 
	id VARCHAR  PRIMARY KEY,
	time TIME,
	lat DECIMAL,
	lng DECIMAL,
	city VARCHAR,
	state VARCHAR,
	type VARCHAR,
	severity VARCHAR,
	year INT
);

-- Create table
CREATE TABLE accidents (
	date DATE, 
	id VARCHAR PRIMARY KEY,
	time TIME,
	lat DECIMAL,
	lng DECIMAL,
	description VARCHAR,
	severity INT,
	city VARCHAR,
	state VARCHAR,
	visibility DECIMAL,
	wind_speed DECIMAL,
	precipitation DECIMAL,
	weather_condition VARCHAR,
	year INT
);

-- select tables
SELECT * FROM weather;
SELECT * FROM accidents;