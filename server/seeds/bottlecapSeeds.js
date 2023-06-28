const sequelize = require("../config/connection");
const { Bottlecap } = require("../models");

const bottlecapData = [
  {
    source: "Coca-Cola",
    category: "Soda",
    location: "Cary, NC",
    tags: "Circle, Red"
  },
  {
    source: "Ale-8-One",
    category: "Soda",
    location: "Lexington, KY",
    tags: "Circle, White"
  },
  {
    source: "Corona",
    category: "Alcohol",
    location: "Cary, NC",
    tags: "Sun"
  },
];

const seedBottlecaps = () => Bottlecap.bulkCreate(bottlecapData, { individualHooks: true });

module.exports = seedBottlecaps;