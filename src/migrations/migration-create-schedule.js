// curentNumber: DataTypes.INTEGER,
//       maxNumber: DataTypes.INTEGER,
//       date: DataTypes.DATE,
//       timeType: DataTypes.STRING,
//       dotorId: DataTypes.INTEGER,
"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Schedules", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      curentNumber: {
        type: Sequelize.INTEGER,
      },
      maxNumber: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
      timeType: {
        type: Sequelize.STRING,
      },
      dotorId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Schedules");
  },
};