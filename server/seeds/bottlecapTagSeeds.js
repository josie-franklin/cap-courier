const sequelize = require("../config/connection");
const { BottlecapTag } = require("../models");

const bottlecapTagData = [
    {
      bottlecap_id: 1,
      tag_id: 1,
    },
    {
      bottlecap_id: 1,
      tag_id: 16,
    },
    {
      bottlecap_id: 2,
      tag_id: 16,
    },
    {
        bottlecap_id: 3,
        tag_id: 27,
    },
    {
      bottlecap_id: 3,
      tag_id: 1,
    },
  ];
  
  const seedBottlecapTags = () => BottlecapTag.bulkCreate(bottlecapTagData, { individualHooks: true });
  
  module.exports = seedBottlecapTags;