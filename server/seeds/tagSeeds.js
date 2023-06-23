const sequelize = require("../config/connection");
const { Tag } = require("../models");

const tagData = [
    {
      label: "Red",
      category: "Color",
    },
    {
      label: "Circle",
      category: "Shape",
    },
    {
      label: "Sun",
      category: "Object",
    },
  ];
  
  const seedTags = () => Tag.bulkCreate(tagData, { individualHooks: true });
  
  module.exports = seedTags;