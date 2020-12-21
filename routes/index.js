var express = require('express');
var router = express.Router();

var usersRouter = require('./users');

app.use('/users', usersRouter);
/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json({ message: "Server default routes" });
});
module.exports = router;
