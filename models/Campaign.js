'use strict';

module.exports = (sequelize, DataTypes) => {
    const Campaign = sequelize.define('Campaign', {
        user_id: DataTypes.INTEGER,
        category_id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        goal_amount: DataTypes.DECIMAL(15, 2),
        current_amount: DataTypes.DECIMAL(15, 2),
        main_image_url: DataTypes.STRING,
        start_date: DataTypes.DATE,
        end_date: DataTypes.DATE,
        status: DataTypes.ENUM('draft', 'active', 'completed', 'cancelled'),
        total_donors: DataTypes.INTEGER
    }, {
        tableName: 'campaigns',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    Campaign.associate = function(models) {
        // define associations here
    };

    return Campaign;
};
