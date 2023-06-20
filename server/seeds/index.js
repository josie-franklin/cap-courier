const seedBottlecaps = require('./bottlecapSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');

    await seedBottlecaps();
    console.log('--------------');
  
    process.exit(0);
  };
  
  seedAll();