const { Post } = require('../models');

const postData = [
  {
    title: 'Off-Day',
    content: 'Jim wont be coming to daycare on Tuesday',
    user_id: 1
  },

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;