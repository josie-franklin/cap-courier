const Bottlecap = require("./Bottlecap");
const Tag = require("./Tag");
const BottlecapTag = require("./BottlecapTag");

// Bottlecap.belongsToMany(Tag, { through: BottlecapTag });
// Tag.belongsToMany(Bottlecap, { through: BottlecapTag });

// BottlecapTag.belongsTo(Bottlecap);
// Bottlecap.hasMany(BottlecapTag);

// BottlecapTag.belongsTo(Tag);
// Tag.hasMany(BottlecapTag);

module.exports = { Bottlecap, Tag, BottlecapTag };
