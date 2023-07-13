const sequelize = require("../config/connection");
const { Bottlecap } = require("../models");

const bottlecapData = [
  {
    source: "Coca-Cola",
    category: "Soft Drink",
    location: "Cary, NC",
    tags: "Circle, Red"
  },
  {
    source: "Ale-8-One",
    category: "Soft Drink",
    location: "Lexington, KY",
    tags: "Circle, White"
  },
  {
    source: "Corona",
    category: "Hard Drink",
    location: "Cary, NC",
    tags: "Sun"
  },
];

const seedBottlecaps = () => Bottlecap.bulkCreate(bottlecapData, { individualHooks: true });

module.exports = seedBottlecaps;