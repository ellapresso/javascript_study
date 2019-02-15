var mysql = require("mysql");
var conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "mysql1234",
  database: "nodeStudy"
});
conn.connect();

const sql = "select * from sample";
conn.query(sql, function(err, rows, fields) {
  if (err) {
    console.log(err);
  } else {
    console.log("r:", rows);
    console.log("f:", fields);
  }
});

conn.end();
