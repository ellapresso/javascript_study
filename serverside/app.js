//main file, main application

const express = require("express");
const bodyParser = require("body-parser"); //미들웨어 : post방식으로 데이터를 보낼때 body객체를 읽어들임.
const app = express();

app.locals.pretty = true;

app.set("view engine", "jade"); //지금은 pug, 과거에는 jade
app.set("views", "./views"); //templete file 저장할 폴더

//정적인 파일이 위치할 디렉토리를 지정하는 부분 (Default : Public , 보통 html같은 파일을 위치함 )
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/form", function(req, res) {
  res.render("form");
});

app.post("/form_receiver", function(req, res) {
  const title = req.body.title;
  const description = req.body.description;
  res.send(title + "," + description);
});

app.get("/form_receiver", function(req, res) {
  const title = req.query.title;
  const description = req.query.description;
  res.send(title + "," + description);
});

app.get("/topic/:id", function(req, res) {
  const topics = ["Javascript ...", "Java ...", "PHP ...", "Nodejs ..."];
  const output = `
  <a href="/topic?id=0">Javascript</a><br>
  <a href="/topic?id=1">Java</a><br>
  <a href="/topic?id=2">PHP</a><br>
  <a href="/topic?id=3">Nodejs</a><br>
  ${topics[req.params.id]}
  `; //쿼리스트링으로 하고싶을때는 query, 시멘틱으로 하고싶을때는 params
  res.send(output); //id가 쿼리스트링에서 넘겨주는 파라미터값
});
app.get("/templete", function(req, res) {
  res.render("temp", { time: Date(), _title: "pug" }); //templete.pug의 time변수에 time을 객체로 넘겨줌.
});
app.get("/", function(req, res) {
  res.send("Hello Home");
}); //url을 치고 들어올때 get방식으로 받음.

app.get("/dynamic", function(req, res) {
  var lis = "";
  for (let i = 0; i < 5; i++) {
    lis = lis + "<li>coding</li>";
  }
  const time = Date();
  const output = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>title</title>
  </head>
  <body>
    This file name is 'static'
    <ul>
    ${lis}
    </ul>
    ${time}
  </body>
</html>
`;
  res.send(output);
});

app.get("/route", function(req, res) {
  res.send("Image is <img src='/3131.jpg'>");
});

app.get("/login", function(req, res) {
  res.send("login page");
}); //  localhost:3000/login 에 접속하면 'login page'문구 볼 수 있음

app.listen(3000, function() {
  //3000번 포트 연결
  console.log("Connected port 3000");
});
