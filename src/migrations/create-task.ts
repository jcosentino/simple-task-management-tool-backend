'use strict';

// Used to create the databases if not present, then creates the tables
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      dueDateMonth: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      dueDateDay: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      dueDateYear: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: false,
        defaultValue: 'backlog',
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks');
  }
};
