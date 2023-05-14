const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogComments extends Model {}

BlogComments.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);

module.exports = BlogComments;
