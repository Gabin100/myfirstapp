'use strict';
module.exports = {
    up: function(queryInterface, Sequelize){
        return queryInterface.createTable('user',{
            id:{
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING
            },
            firstname: {
                allowNull: true,
                type: Sequelize.STRING
            },lastname: {
                allowNull: true,
                type: Sequelize.STRING
            },password: {
                allowNull: false,
                type: Sequelize.STRING
            }
        });
    },
    down:(queryInterface, Sequelize) => {
        return queryInterface.dropTable('user');
    }
};