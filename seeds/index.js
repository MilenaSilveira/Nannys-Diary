const adminSeed = require('./adminpost');
const commentSeed = require('./comment');
const childSeed = require('./child');
const userSeed = require('./user');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await adminSeed();
  console.log('\n----- ADMIN POST SEEDED -----\n');
  await commentSeed();
  console.log('\n----- COMMENT POST SEEDED -----\n');
  await childSeed();
  console.log('\n----- CHILD SEEDED -----\n');
  await userSeed();
  console.log('\n----- USER SEEDED -----\n');



  process.exit(0);
};

seedAll();