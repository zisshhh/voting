const express = require('express');
const router = express.Router();
const pool = require("../../connections/DB.connect.js");
const isLoggedIn = require("../../middelwear/login.js")

router.get('/', isLoggedIn, async (req, res) => {
    try {
        const now = new Date();
        const result = await pool.query(`
            SELECT * FROM vote
            WHERE start_date <= $1 AND end_date >= $1
            ORDER BY end_date ASC
        `, [now]);

        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching ongoing elections' });
    }
});

module.exports = router;