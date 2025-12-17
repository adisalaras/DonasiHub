module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('campaigns', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
            model: 'users',
            key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        category_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
            model: 'categories',
            key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT'
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        goal_amount: {
            type: Sequelize.DECIMAL(15, 2),
            allowNull: false
        },
        current_amount: {
            type: Sequelize.DECIMAL(15, 2),
            defaultValue: 0
        },
        main_image_url: {
            type: Sequelize.STRING
        },
        start_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        end_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        status: {
            type: Sequelize.ENUM('draft', 'active', 'completed', 'cancelled'),
            defaultValue: 'draft'
        },
        total_donors: {
            type: Sequelize.INTEGER,
            defaultValue: 0
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

        // Add indexes for better query performance
        await queryInterface.addIndex('campaigns', ['user_id']);
        await queryInterface.addIndex('campaigns', ['category_id']);
        await queryInterface.addIndex('campaigns', ['status']);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('campaigns');
    }
};