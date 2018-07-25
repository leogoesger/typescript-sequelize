"use strict";
import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
    up: (queryInterface: QueryInterface, dataType: DataTypes) => {
        return queryInterface.createTable("Location", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: dataType.INTEGER,
            },
            name: {
                type: dataType.TEXT,
                allowNull: false,
            },
            open: {
                type: dataType.BOOLEAN,
                defaultValue: true,
                allowNull: false,
            },
            description: {
                type: dataType.TEXT,
            },
            geoCode: {
                type: dataType.TEXT,
            },
            type: {
                type: dataType.ENUM,
                allowNull: false,
                values: [
                    "COUNTRY",
                    "STATE",
                    "REGION",
                    "PLACE",
                    "AREA",
                    "SECTION",
                ],
            },
            countryId: {
                type: dataType.INTEGER,
            },
            stateId: {
                type: dataType.INTEGER,
            },
            regionId: {
                type: dataType.INTEGER,
            },
            placeId: {
                type: dataType.INTEGER,
            },
            areaId: {
                type: dataType.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: dataType.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: dataType.DATE,
            },
        });
    },
    down: (queryInterface: any) => {
        return queryInterface.dropTable("Location");
    },
};
