
const { Pool } = require('pg');
require('dotenv').config()

const pool = new Pool({
    connectionString: process.env.NEON_URL,
    ssl: {
        rejectUnauthorized: false, // Required for Neon
    },
});

module.exports = pool;