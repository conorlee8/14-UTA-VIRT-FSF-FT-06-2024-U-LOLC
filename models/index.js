const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User has many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Post belongs to User
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// Comment belongs to User
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

// Comment belongs to Post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

// Post has many comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

module.exports = { User, Post, Comment };
