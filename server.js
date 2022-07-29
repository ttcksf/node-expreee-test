const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const PORT = 3000;

//最初にミドルウェアを宣言しておく
// app.use(mylogger);

//publicフォルダの中のHTMLファイルを使う(静的ファイル)
// app.use(express.static("public"));

//テンプレートエンジンで動的ファイルを読み込む
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // console.log("listening");
  // res.send("<h1>hello world</h1>");
  // res.sendStatus(404);
  // res.status(500).send("Sorry, there");
  // res.status(500).json({ msg: "Sorry, there" });

  //index.ejsをレンダーする
  res.render("index", { text: "Nodejs" });
});

//routing
app.use("/user", userRouter);

app.listen(PORT, () => console.log("listening on port"));
