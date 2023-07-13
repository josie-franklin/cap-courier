const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Op, QueryTypes } = require("sequelize");
const { Bottlecap, Tag } = require("../../models");

//Get all caps. Hit on initial collection page load.
router.get("/", (req, res) => {
  Bottlecap.findAll({
    // include: {
    //   model: Tag,
    //   attributes: ["id", "label", "category"],
    //   through: {
    //     attributes: [],
    //   },
    // },
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Get caps from search input. Hit when user inputs and clicks search.
router.get("/query", async (req, res) => {
  try {
    //Set up raw SQL string
    let sqlString = "SELECT * from bottlecap WHERE ";
    if (req.query.search) {
      sqlString =
        sqlString +
        `(id = '${req.query.search}' ` +
        `OR source LIKE '%${req.query.search}%' ` +
        `OR location LIKE '%${req.query.search}%')`;
    }
    if (req.query.filter) {
      if (req.query.search) {
        sqlString = sqlString + " AND ";
      }
      req.query.filter.forEach((filter, index) => {
        if (index === 0) {
          sqlString = sqlString + `tags LIKE '%${filter}%'`;
        } else {
          sqlString = sqlString + ` AND tags LIKE '%${filter}%'`;
        }
      });
    }
    if (req.query.category) {
      console.log(req.query.category);
      if (req.query.search || req.query.filter) {
        sqlString = sqlString + " AND ";
      }
      sqlString = sqlString + `category = '${req.query.category}'`;
    }
    console.log(sqlString);

    //Query the db
    const responseData = await sequelize.query(sqlString, {
      model: Bottlecap,
      mapToModel: true,
      raw: true,
    });
    console.log(responseData);

    //Handle the response
    if (!responseData) {
      res.status(404).json({ message: "No Bottlecap found." });
      return;
    }
    res.json(responseData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Here lie the dregs of an attempt at better db structure. NoSql may have been better for this.
// query line: /query?search=<>&filter[]=<>
// router.get("/query", (req, res) => {
//   if (!req.query.search) {
//     req.query.search = "";
//   }

//   let filterArr;
//   if (req.query.filter) {
//     filterArr = req.query.filter.map((f) => (f = `%${f}%`));
//   }

//   console.log(req.query.filter);
//   // console.log(filterArr);
//   Bottlecap.findAll({
//     where: {
//       [Op.or]: [
//         { id: req.query.search },
//         { source: { [Op.like]: `%${req.query.search}%` } },
//         { category: { [Op.like]: `%${req.query.search}%` } },
//         { location: { [Op.like]: `%${req.query.search}%` } },
//       ],
//       tags: { [Op.like]: `%${req.query.filter}%` },
//       // tags: { [Op.and]: { [Op.like]: filterArr } },
//     },
//   })
//     .then((data) => {
//       if (!data) {
//         res.status(404).json({ message: "No bottlecap found." });
//         return;
//       }
//       res.json(data);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

//============================================================================================

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
