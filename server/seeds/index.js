const seedBottlecaps = require('./bottlecapSeeds');
const seedTags = require('./tagSeeds');
// const seedBottlecapTags = require('./bottlecapTagSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');

    await seedBottlecaps();
    await seedTags();
    // await seedBottlecapTags();
    console.log('--------------');
  
    process.exit(0);
  };
  
  seedAll();