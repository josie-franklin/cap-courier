const seedBottlecaps = require('./bottlecapSeeds');
const seedTags = require('./tagSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');

    await seedBottlecaps();
    await seedTags();
    console.log('--------------');
  
    process.exit(0);
  };
  
  seedAll();