const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class AdminPost extends Model { }

AdminPost.init(
  {

    date_created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    meals: {
      type: DataTypes.STRING,
    },
    activities: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nap_schedule: {
      type: DataTypes.STRING,
    },
    child_mood: {
      type: DataTypes.STRING,
    },
    other: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'adminpost',
  }
);

module.exports = AdminPost;