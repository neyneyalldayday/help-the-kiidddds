// Models - the 'M' of the MVC
// responsible for the server connections, routes, sessions and anything database related

const User = require('./User');
const BlogPosts = require('./BlogPosts');
const BlogComments = require('./BlogComments');

BlogPosts.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BlogPosts.hasMany(BlogComments, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

BlogComments.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, BlogPosts, BlogComments };
