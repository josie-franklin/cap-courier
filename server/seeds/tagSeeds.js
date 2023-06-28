const sequelize = require("../config/connection");
const { Tag } = require("../models");

const tagData = [
    {
      label: "Red",
      category: "Color",
    },
    {
      label: "Orange",
      category: "Color",
    },
    {
      label: "Yellow",
      category: "Color",
    },
    {
      label: "Green",
      category: "Color",
    },
    {
      label: "Blue",
      category: "Color",
    },
    {
      label: "Purple",
      category: "Color",
    },
    {
      label: "Pink",
      category: "Color",
    },
    {
      label: "Black",
      category: "Color",
    },
    {
      label: "White",
      category: "Color",
    },
    {
      label: "Grey",
      category: "Color",
    },
    {
      label: "Gold",
      category: "Color",
    },
    {
      label: "Silver",
      category: "Color",
    },
    {
      label: "Copper",
      category: "Color",
    },
    {
      label: "Brown",
      category: "Color",
    },
    {
      label: "Beige",
      category: "Color",
    },
    {
      label: "Circle",
      category: "Shape",
    },
    {
      label: "Square",
      category: "Shape",
    },
    {
      label: "Triangle",
      category: "Shape",
    },
    {
      label: "Heart",
      category: "Shape",
    },
    {
      label: "Cross",
      category: "Shape",
    },
    {
      label: "Star",
      category: "Shape",
    },
    {
      label: "Crescent",
      category: "Shape",
    },
    {
      label: "Arrow",
      category: "Shape",
    },
    {
      label: "Spiral",
      category: "Shape",
    },
    {
      label: "Oval",
      category: "Shape",
    },
    {
      label: "Polygon",
      category: "Shape",
    },
    {
      label: "Other shape",
      category: "Shape",
    },
    {
      label: "Plant(s)",
      category: "Object",
    },
    {
      label: "Animal(s)",
      category: "Object",
    },
    {
      label: "Person/People",
      category: "Object",
    },
    {
      label: "Body part",
      category: "Object",
    },
    {
      label: "Landscape",
      category: "Object",
    },
    {
      label: "Sun",
      category: "Object",
    },
    {
      label: "Moon",
      category: "Object",
    },
    {
      label: "Cloud(s)",
      category: "Object",
    },
    {
      label: "Building(s)",
      category: "Object",
    },
    {
      label: "Food",
      category: "Object",
    },
    {
      label: "Drink",
      category: "Object",
    },
    {
      label: "Flag",
      category: "Object",
    },
    {
      label: "Map",
      category: "Object",
    },
    {
      label: "Vehicle",
      category: "Object",
    },
    {
      label: "Logo",
      category: "Object",
    },
    {
      label: "Sport",
      category: "Object",
    },
    {
      label: "Weapon/Shield",
      category: "Object",
    },
    {
      label: "Other object",
      category: "Object",
    },
  ];
  
  const seedTags = () => Tag.bulkCreate(tagData, { individualHooks: true });
  
  module.exports = seedTags;