// Carrega as variáveis de ambiente do arquivo .env
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../config/.env') });
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});



module.exports = pool;
