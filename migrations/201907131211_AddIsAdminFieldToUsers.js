'use strict'

// import { Sequelize } from "../models";
// import { QueryInterface } from "sequelize/types";

const columnAndTypes = [{
    name: 'is_amin',
    type: (Sequelize) =>{
    return{
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
        }
    }
}];

// Don't change it
module.exports = {
    up: (QueryInterface, Sequelize) => {
        return Promise.all(
            columnAndTypes.map(c => {
                return QueryInterface.addColumn(
                    'users',
                    c.name,
                    c.type(Sequelize)
                )
            })
        )
    },
    down: (QueryInterface, Sequelize) => {
        return Promise.all(
            columnAndTypes.map(c => {
                'users',
                c.name
            })
        )
    }
}
