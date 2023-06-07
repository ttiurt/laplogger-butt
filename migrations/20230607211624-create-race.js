'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Races', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      circuit: {
        type: Sequelize.STRING(48),
        allowNull: false
      },
      winner: {
        type: Sequelize.STRING(48),
        allowNull: false
      },
      cnstrc: {
        type: Sequelize.STRING(48),
        allowNull: false
      },
      watchable: {
        type: Sequelize.STRING(5),
        allowNull: false,
        enum: ['Yes', 'No']
      },
      rating: {
        type: Sequelize.INTEGER,
        min: 1,
        max: 10,
      },
      thoughts: {
        type: Sequelize.STRING(120),
        allowNull: false
      },
      creatorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Profiles',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Races');
  }
};