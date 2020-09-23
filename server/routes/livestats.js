const express = require("express");
const bodyParser = require("body-parser");
const LiveStats = require("../models/statsModal");

const livestatsrouter = express.Router();

livestatsrouter.use(bodyParser.json());
livestatsrouter.route("/").get((req, res, next) => {
    LiveStats.findById("5f67144aa1755d436425ffa5")
      .then(
        (stats) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(stats);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
});
module.exports = livestatsrouter;
