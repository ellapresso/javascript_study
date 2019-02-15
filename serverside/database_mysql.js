var mysql = require("mysql");
var conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "mysql1234",
  database: "nodeStudy"
});
conn.connect();

// const sql = "select * from sample";
// conn.query(sql, function(err, rows, fields) {
//   if (err) {
//     console.log(err);
//   } else {
//     for (let i = 0; i < rows.length; i++) {
//       console.log(rows[i].no);
//     }
//   }
// });

// const sql = "insert into sample(memo,title) values(?,?)";
// const params = ["description", "testing"];

// conn.query(sql, params, function(err, rows, fields) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("rows:", rows);
//     console.log(rows.insertId);
//   }
// });

// const sql = "UPDATE sample SET title=?,memo=? where no=?";
// const params = ["desc", "test", 8];

// conn.query(sql, params, function(err, rows, fields) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("rows:", rows);
//   }
// });

const sql = "delete from sample where no=?";
const params = [1];

conn.query(sql, params, function(err, rows, fields) {
  if (err) {
    console.log(err);
  } else {
    console.log("rows:", rows);
    console.log(fields);
  }
});

conn.end();
