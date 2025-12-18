'use strict';

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        icon_url: DataTypes.STRING
    }, {
        tableName: 'categories',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    Category.associate = function(models) {
        // define associations here
    };

    return Category;
};
