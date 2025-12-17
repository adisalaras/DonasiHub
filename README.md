# DonasiHub

Platform donasi online berbasis REST API.

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM

## Instalasi

1. Clone repository
```bash
git clone https://github.com/username/DonasiHub.git
cd DonasiHub
```

2. Install dependencies
```bash
npm install
```

3. Buat file `.env` berdasarkan `.env.example`
```bash
cp .env.example .env
```

4. Konfigurasi `.env`
```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=donasihub_db
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

5. Buat database PostgreSQL
```bash
createdb donasihub_db
```

6. Jalankan migrasi
```bash
npm run migrate
```

7. Jalankan seeder (opsional)
```bash
npm run seed
```

## Menjalankan Aplikasi

```bash
npm start
```

Server akan berjalan di `http://localhost:3000`

## Scripts

| Script | Deskripsi |
|--------|-----------|
| `npm start` | Menjalankan server |
| `npm run dev` | Menjalankan server dengan nodemon |
| `npm run migrate` | Menjalankan migrasi database |
| `npm run migrate:undo` | Membatalkan migrasi terakhir |
| `npm run seed` | Menjalankan seeder |

## Struktur Database

- **users** - Data pengguna
- **categories** - Kategori campaign
- **campaigns** - Campaign donasi
- **donations** - Data donasi
