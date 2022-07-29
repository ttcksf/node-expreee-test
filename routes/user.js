const express = require("express");
const router = express.Router();

//最初にミドルウェアを宣言しておく
// router.use(mylogger);

//個別のエンドポイントのみにミドルウェアが欲しい時は第二引数に宣言する
router.get("/", mylogger, (req, res) => {
  res.send("User");
});

router.get("/info", (req, res) => {
  res.send("User Info");
});

router.get("/:id", (req, res) => {
  res.send(`${req.params.id}のユーザー情報を取得しました`);
});

//middlewear
function mylogger(req, res, next) {
  console.log(req.originalUrl);
  //実行を止めない関数
  next();
}

module.exports = router;
