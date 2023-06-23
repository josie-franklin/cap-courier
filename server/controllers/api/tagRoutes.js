const router = require("express").Router();
const { Op } = require("sequelize");
const { Tag } = require("../../models");

router.get("/", (req, res) => {
    Tag.findAll()
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;
