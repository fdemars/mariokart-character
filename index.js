let express = require("express");
let app = new express();                                                                     

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
.then((result) => {
let html = "<body><ul>";
for (let i=0;i<result.length;i++) {
html += "<li>" + result[i].name + "</li>";
}
html += "</body>"
res.send(html);
 }); 
});
app.listen(3000);
