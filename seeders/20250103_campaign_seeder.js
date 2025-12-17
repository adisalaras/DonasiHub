module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('campaigns', [
        {
            user_id: 2,
            category_id: 1,
            title: 'Bantu Anak Desa Mendapatkan Pendidikan Layak',
            description: 'Program beasiswa untuk 50 anak di desa terpencil. Dana akan digunakan untuk biaya sekolah, seragam, dan perlengkapan belajar.',
            goal_amount: 50000000,
            current_amount: 15000000,
            main_image_url: 'https://via.placeholder.com/800x400?text=Pendidikan',
            start_date: new Date('2024-01-01'),
            end_date: new Date('2024-12-31'),
            status: 'active',
            total_donors: 45,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            user_id: 2,
            category_id: 2,
            title: 'Operasi Jantung untuk Bayi Mungil',
            description: 'Bayi berusia 6 bulan membutuhkan operasi jantung segera. Keluarga tidak mampu membiayai. Bantu kami mengumpulkan dana untuk operasinya.',
            goal_amount: 75000000,
            current_amount: 32000000,
            main_image_url: 'https://via.placeholder.com/800x400?text=Kesehatan',
            start_date: new Date('2024-02-01'),
            end_date: new Date('2024-06-30'),
            status: 'active',
            total_donors: 120,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            user_id: 2,
            category_id: 3,
            title: 'Bantuan Korban Banjir Bandang',
            description: 'Ribuan keluarga kehilangan rumah dan harta benda akibat banjir bandang. Mari kita bantu mereka dengan menyediakan kebutuhan dasar.',
            goal_amount: 100000000,
            current_amount: 85000000,
            main_image_url: 'https://via.placeholder.com/800x400?text=Bencana',
            start_date: new Date('2024-01-15'),
            end_date: new Date('2024-04-15'),
            status: 'active',
            total_donors: 350,
            created_at: new Date(),
            updated_at: new Date()
        }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('campaigns', null, {});
    }
};