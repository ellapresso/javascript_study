const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //미들웨어 : post방식으로 데이터를 보낼때 body객체를 읽어들임.
const fs = require("fs"); //  노드에서 제공하는 파일시스템을 제어할수 있는 모듈

var mysql = require("mysql");
var conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "mysql1234",
  database: "nodeStudy"
});
conn.connect();

app.locals.pretty = true;
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, function() {
  console.log("Connected 3000!");
});
app.get("/", function(req, res) {
  res.send("Connected 3000 port");
});

app.set("views", "./views_mysql");
app.set("view engine", "jade");

app.get("/topic/new", function(req, res) {
  fs.readdir("data", function(err, files) {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
    res.render("new", { topics: files });
  });
});

app.post("/topic", function(req, res) {
  const title = req.body.title;
  const descr = req.body.description;
  fs.writeFile("data/" + title, descr, function(err) {
    if (err) {
      console.log(err);
      //에러가 있을때
      res.status(500).send("Internal Server Error");
    }
    //에러가 없을때
    res.redirect("/topic/" + title);
  });
});

app.get(["/topic", "/topic/:id"], function(req, res) {
  const sql = "select no,title,memo from sample";
  conn.query(sql, function(err, topics, fields) {
    const no = req.params.id;
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
    if (no) {
      const sql = "select * from sample where no = ?";
      conn.query(sql, [no], function(err, topic, fields) {
        if (err) {
          console.log(err);
          res.status(500).send("Internal Server Error");
        } else {
          res.render("view", { topics: topics, topic: topic[0] });
        }
      });
    } else {
      res.render("view", { topics: topics });
    }
    // res.send(rows);
  });
});

// app.get("/topic/:id", function(req, res) {
//   const id = req.params.id;
//   fs.readdir("data", function(err, files) {
//     if (err) {
//       console.log(err);
//       res.status(500).send("Internal Server Error");
//     }
//     fs.readFile("data/" + id, "utf-8", function(err, data) {
//       if (err) {
//         console.log(err);
//         res.status(500).send("Internal Server Error");
//       }
//       res.render("view", { topics: files, title: id, description: data });
//     });
//   });
// });
