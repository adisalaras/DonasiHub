'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        full_name: DataTypes.STRING,
        phone: DataTypes.STRING,
        avatar_url: DataTypes.STRING,
        role: DataTypes.ENUM('donor', 'campaigner', 'admin'),
        is_verified: DataTypes.BOOLEAN
    }, {
        tableName: 'users',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    User.associate = function(models) {
        // define associations here
    };

    return User;
};
