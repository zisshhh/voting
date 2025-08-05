const express = require('express');
const router = express.Router();
const pool = require("../../connections/DB.connect.js");

router.get('/', async (req, res) => {
    try {
        const voteRes = await pool.query('SELECT COUNT(*) FROM user_votes');
        const electionRes = await pool.query('SELECT COUNT(*) FROM vote');

        const stats = {
            total_votes: voteRes.rows[0].count + '+',
            total_elections: electionRes.rows[0].count + '+',
            system_uptime: '99.9%' // You can calculate this if you store uptime logs
        };

        res.status(200).json(stats);
    } catch (err) {
        console.error('Error fetching stats:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
