module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        full_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.STRING
        },
        avatar_url: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.ENUM('donor', 'campaigner', 'admin'),
            defaultValue: 'donor'
        },
        is_verified: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
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
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    }
};