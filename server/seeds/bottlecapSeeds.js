const sequelize = require("../config/connection");
const { Bottlecap } = require("../models");

const bottlecapData = [
  {
    image: "bottlecaps/coca-cola_a5qmyf",
    category: "Soft Drink",
    brand: "Coca-Cola",
    flavor: "Original",
    date: "7/16/23",
    location: "Cary, NC",
    text: "Coca-Cola",
    note: null,
    tags: "White, Red",
    count: 2,
  },
  {
    image: "bottlecaps/ale-8-one_ucp3ax",
    category: "Soft Drink",
    brand: "Ale-8-One",
    flavor: "Original",
    date: "7/16/23",
    location: "Lexington, KY",
    text: "Ale 8 TWIST OFF",
    note: null,
    tags: "Silver, Red",
    count: 1,
  },
  {
    image: "bottlecaps/corona-extra_s4ztbo",
    category: "Hard Drink",
    brand: "Corona Extra",
    flavor: "Original",
    date: "7/16/23",
    location: "Cary, NC",
    text: "Corona Extra",
    note: "Oh, a little note!",
    tags: "White, Blue, Crown",
    count: 1,
  },
];

const seedBottlecaps = () =>
  Bottlecap.bulkCreate(bottlecapData, { individualHooks: true });

module.exports = seedBottlecaps;
