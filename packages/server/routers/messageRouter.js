const express = require("express");

const router = express.Router();

router.route("/message").get((req, res) => {
  res.send({
    data: "Hello from Express",
  });
});

module.exports = router;
