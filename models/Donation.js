'use strict';

module.exports = (sequelize, DataTypes) => {
    const Donation = sequelize.define('Donation', {
        user_id: DataTypes.INTEGER,
        campaign_id: DataTypes.INTEGER,
        amount: DataTypes.DECIMAL(15, 2),
        payment_method: DataTypes.STRING,
        payment_status: DataTypes.ENUM('pending', 'success', 'failed', 'refunded'),
        transaction_id: DataTypes.STRING,
        message: DataTypes.TEXT,
        is_anonymous: DataTypes.BOOLEAN,
        payment_date: DataTypes.DATE
    }, {
        tableName: 'donations',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    Donation.associate = function(models) {
        // define associations here
    };

    return Donation;
};
