const Child = require('./Child');
const AdminPost = require('./Adminpost');
const Comment = require('./Comment');
const User = require('./User');


User.hasMany(Child, {
  foreignKey: 'user_id',
});

Child.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

AdminPost.belongsTo(User, {
  foreignKey: 'user_id',
});




module.exports = { Child, AdminPost, Comment, User,};