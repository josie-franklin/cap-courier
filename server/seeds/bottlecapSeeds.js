const sequelize = require("../config/connection");
const { Bottlecap } = require("../models");

const bottlecapData = [
  {
    source: "Coca-Cola",
    category: "Soda",
    location: "Cary, NC",
  },
  {
    source: "Ale-8-One",
    category: "Soda",
    location: "Lexington, KY",
  },
  {
    source: "Corona",
    category: "Alcohol",
    location: "Cary, NC",
  },
];

const seedBottlecaps = () => Bottlecap.bulkCreate(bottlecapData, { individualHooks: true });

module.exports = seedBottlecaps;