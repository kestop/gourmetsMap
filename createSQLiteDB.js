"use strict";
var sql = require("sqlite3");
sql.verbose();
var db = new sql.Database("gourmetMap.db");
db.serialize(startup);

function startup() {
	db.run("CREATE TABLE Person (id INTEGER PRIMARY KEY,username TEXT NOT NULL, password TEXT NOT NULL, email TEXT UNIQUE NOT NULL)",err);
	db.run("INSERT INTO Person (email, username, password) VALUES ('adasd@adsd.com','doggie','password')",err);
	db.run("CREATE TABLE Restuarant (id INTEGER PRIMARY KEY, name TEXT NOT NULL, address TEXT NOT NULL, postcode TEXT NOT NULL, phone TEXT UNIQUE NOT NULL)",err);
	db.run("INSERT INTO Restuarant (name, address, postcode, phone) VALUES ('firstR','nowhere','bs81jr','6666666')",err);

	db.close();
}

function err(e) {
	if(e) throw(e);
}