const sequelize = require('../config/connection');
const { User, Comment, AdminPost, Child } = require('../models');

// const userData = require('./userData.json');
// const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const child of childData) {
    await Child.create({
      ...child,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  

  process.exit(0);
};

seedDatabase();
