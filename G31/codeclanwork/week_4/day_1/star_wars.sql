.headers ON
.mode column
PRAGMA FOREIGN_KEYS = ON:

DROP TABLE lightsabers;
DROP TABLE characters;


CREATE TABLE characters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    darkside BOOLEAN,
    age INTEGER
);


CREATE TABLE lightsabers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    colour VARCHAR,
    hilt_metal VARCHAR, 
    character_id INTEGER,
       FOREIGN KEY (character_id)
         REFERENCES characters (id)

);

-- SELECT * FROM characters;

INSERT INTO characters (name, darkside, age) VALUES ('Obi-Wan Kenobi', false, 27);
INSERT INTO characters (name, darkside, age) VALUES ('Anakin Skywalker', false, 19);
INSERT INTO characters (name, darkside, age) VALUES ('Darth Maul', true, 32);


-- SELECT * FROM characters; 


INSERT INTO characters (name, darkside) VALUES ('Yoda', false);

-- SELECT * FROM characters;

-- SELECT name FROM characters;

-- SELECT COUNT(*) FROM characters

UPDATE characters SET (name, darkside) = ('Darth Vader', true) WHERE name = 'Anakin Skywalker';

INSERT INTO characters (name, darkside, age) VALUES ('Luke Skywalker', false, 17);

UPDATE characters SET (age) = (65) WHERE name = 'Obi-Wan Kenobi';

-- SELECT * FROM characters;

-- DELETE FROM characters WHERE name = 'Darth Maul';

-- SELECT * FROM  characters; 

INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 25);
INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 25);
INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 25);
INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 25);
INSERT INTO characters (name, darkside, age) VALUES ('Stormtrooper', true, 25);



INSERT INTO lightsabers (colour, hilt_metal,character_id) VALUES ('green', 'palladium', 1);
INSERT INTO lightsabers (colour, hilt_metal,character_id) VALUES ('red', 'gold', 3);
INSERT INTO lightsabers (colour, hilt_metal,character_id) VALUES ('pink', 'platinum', 4);
-- SELECT * FROM characters; 

UPDATE characters SET age =26 WHERE id =6;


SELECT * FROM characters; 
SELECT * FROM lightsabers where character_id = 1;