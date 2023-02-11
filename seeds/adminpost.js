const { AdminPost } = require('../models');

const postData = [
  {
    child_Name: 'Timmy',
    meals: 'Chicken nuggets and apple sauce for lunch. Goldfish for afternoon snack',
    activities: 'arts and crafts: drew a polar bear',
    nap_schedule:'took nap for 2 hrs',
    child_mood: 'Happy: Overall good day',
    other: 'n/a',
    date_created: asdfasdf
  },

];

const seedPosts = () => AdminPost.bulkCreate(postData);

module.exports = seedPosts;