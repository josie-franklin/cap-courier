const sequelize = require("../config/connection");
const { Bottlecap } = require("../models");

const bottlecapData = [
  {
    source: "Coca-Cola",
    category: "Soft Drink",
    location: "Cary, NC",
    tags: "Circle, Red",
    image: "bottlecaps/coca-cola_a5qmyf"
  },
  {
    source: "Ale-8-One",
    category: "Soft Drink",
    location: "Lexington, KY",
    tags: "Circle, White",
    image: "bottlecaps/ale-8-one_ucp3ax"
  },
  {
    source: "Corona",
    category: "Hard Drink",
    location: "Cary, NC",
    tags: "Sun",
    image: "bottlecaps/corona-extra_s4ztbo"
  },
];

const seedBottlecaps = () => Bottlecap.bulkCreate(bottlecapData, { individualHooks: true });

module.exports = seedBottlecaps;