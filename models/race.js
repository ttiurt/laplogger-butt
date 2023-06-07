'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Race extends Model {
    
    static associate(models) {
      Race.belongsTo(models.Profile, { foreignKey: 'creatorId' })
    }
  }
  Race.init({
    circuit: {
      type: DataTypes.STRING(48),
      allowNull: false
    },
    winner: {
      type: DataTypes.STRING(48),
      allowNull: false
    },
    cnstrc: {
      type: DataTypes.STRING(48),
      allowNull: false
    },
    watchable: {
      type: DataTypes.STRING(5),
      allowNull: false,
      enum: ['Yes', 'No']
    },
    rating: {
      type: DataTypes.INTEGER,
      min: 1,
      max: 10,
    },
    thoughts: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    creatorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Race',
  });
  return Race;
};