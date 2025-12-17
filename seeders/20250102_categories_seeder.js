module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('categories', [
        {
            name: 'Pendidikan',
            description: 'Kampanye untuk pendidikan dan beasiswa',
            icon_url: '🎓',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Kesehatan',
            description: 'Bantuan medis dan kesehatan',
            icon_url: '🏥',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Bencana Alam',
            description: 'Bantuan untuk korban bencana',
            icon_url: '🌪️',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Sosial',
            description: 'Program sosial dan kemanusiaan',
            icon_url: '❤️',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Lingkungan',
            description: 'Pelestarian lingkungan',
            icon_url: '🌱',
            created_at: new Date(),
            updated_at: new Date()
        }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('categories', null, {});
    }
};