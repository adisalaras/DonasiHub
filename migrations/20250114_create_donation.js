module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('donations', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        campaign_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
            model: 'campaigns',
            key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: {
            model: 'users',
            key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        amount: {
            type: Sequelize.DECIMAL(15, 2),
            allowNull: false
        },
        payment_method: {
            type: Sequelize.STRING
        },
        payment_status: {
            type: Sequelize.ENUM('pending', 'success', 'failed', 'refunded'),
            defaultValue: 'pending'
        },
        transaction_id: {
            type: Sequelize.STRING,
            unique: true
        },
        message: {
            type: Sequelize.TEXT
        },
        is_anonymous: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        payment_date: {
            type: Sequelize.DATE
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: false
        }
        });

        // Add indexes
        await queryInterface.addIndex('donations', ['campaign_id']);
        await queryInterface.addIndex('donations', ['user_id']);
        await queryInterface.addIndex('donations', ['payment_status']);
        await queryInterface.addIndex('donations', ['transaction_id']);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('donations');
    }
};
