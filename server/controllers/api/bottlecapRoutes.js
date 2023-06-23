const router = require("express").Router();
const { Op } = require("sequelize");
const { Bottlecap } = require("../../models");

router.get("/", (req, res) => {
  Bottlecap.findAll()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:search", (req, res) => {
  Bottlecap.findAll({
    where: {
      [Op.or]: [
        { id: req.params.search },
        { source: { [Op.like]: `%${req.params.search}%` } },
        { category: { [Op.like]: `%${req.params.search}%` } },
        { location: { [Op.like]: `%${req.params.search}%` } },
      ],
    },
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No bottlecap found." });
        return;
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get("/:id", (req, res) => {
//   Bottlecap.findOne({
//     where: {
//       bookNumber: req.params.id,
//     },
//   })
//     .then((dbBottlecapData) => {
//       if (!dbBottlecapData) {
//         res.status(404).json({ message: "No Bottlecap found with this number" });
//         return;
//       }
//       res.json(dbBottlecapData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.post("/", (req, res) => {
//   Bottlecap.create({
//     bookNumber: req.body.bookNumber,
//     title: req.body.title,
//     composer: req.body.composer,
//     arranger: req.body.arranger,
//   })
//     .then((dbBottlecapData) => res.json(dbBottlecapData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.put("/:id", (req, res) => {
//   Bottlecap.update(req.body, {
//     where: {
//       bookNumber: req.params.id,
//     },
//   })
//     .then((dbBottlecapData) => {
//       if (!dbBottlecapData[0]) {
//         res.status(404).json({ message: "No user found with this id" });
//         return;
//       }
//       res.json(dbBottlecapData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.delete("/:id", (req, res) => {
//   Bottlecap.destroy({
//     where: {
//       bookNumber: req.params.id,
//     },
//   })
//     .then((dbBottlecapData) => {
//       if (!dbBottlecapData) {
//         res.status(404).json({ message: "No user found with this id" });
//         return;
//       }
//       res.json(dbBottlecapData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
