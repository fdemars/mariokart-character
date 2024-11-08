let express = require("express");
let app = new express();                                                                     
app.set("view engine","ejs")

// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"mariokartdb.c70a2eusww30.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "password",
  database:"mariokart",
  port: 3306,
 },
});

app.get("/",(req,res) => {
knex
.select()
.from("characters")
.then((result) => {res.render("index", {aCharacters: result});
 }); 
});
app.listen(3000);
