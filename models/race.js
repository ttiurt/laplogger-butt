'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Race extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    thoughts: {
      type: DataTypes.STRING(120),
    }
  }, {
    sequelize,
    modelName: 'Race',
  });
  return Race;
};