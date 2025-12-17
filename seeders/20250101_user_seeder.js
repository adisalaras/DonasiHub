const bcrypt = require('bcryptjs');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const hashedPassword = await bcrypt.hash('password123', 10);
        
        await queryInterface.bulkInsert('users', [
        {
            email: 'admin@crowdfunding.com',
            password: hashedPassword,
            full_name: 'Admin User',
            phone: '081234567890',
            role: 'admin',
            is_verified: true,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            email: 'campaigner@example.com',
            password: hashedPassword,
            full_name: 'Campaign Creator',
            phone: '081234567891',
            role: 'campaigner',
            is_verified: true,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            email: 'donor@example.com',
            password: hashedPassword,
            full_name: 'Generous Donor',
            phone: '081234567892',
            role: 'donor',
            is_verified: true,
            created_at: new Date(),
            updated_at: new Date()
        }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('users', null, {});
    }
};