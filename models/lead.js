'use strict';
module.exports = (sequelize, DataTypes) => {
    let lead = sequelize.define('lead', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return lead;
};