const sequelize = require("../config/connection.js");
const { Model, DataTypes } = require("sequelize");

class BottlecapTag extends Model {}

BottlecapTag.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      bottlecap_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "bottlecap",
          key: "id",
        },
      },
      tag_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "tag",
          key: "id",
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "bottlecaptag",
    }
  );
  
  module.exports = BottlecapTag;
  