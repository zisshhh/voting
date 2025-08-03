const express = require('express');
const router = express.Router();
const pool = require("../../connections/DB.connect.js");
const checkAdmin = require("../../middelwear/admin.js")

// Route 1: GET /dashboard/overview
router.get('/overview', checkAdmin, async (req, res) => {
    try {
        const totalElections = await pool.query('SELECT COUNT(*) FROM vote');
        const activeElections = await pool.query(
            `SELECT COUNT(*) FROM vote 
       WHERE start_date <= NOW() AND end_date >= NOW()`
        );
        const upcomingElections = await pool.query(
            `SELECT COUNT(*) FROM vote 
       WHERE start_date > NOW()`
        );
        const totalVoters = await pool.query('SELECT COUNT(*) FROM users');

        res.json({
            totalElections: parseInt(totalElections.rows[0].count),
            activeElections: parseInt(activeElections.rows[0].count),
            upcomingElections: parseInt(upcomingElections.rows[0].count),
            totalVoters: parseInt(totalVoters.rows[0].count),
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Route 2: GET /dashboard/elections
router.get('/elections', checkAdmin, async (req, res) => {
    try {
        const query = `
      SELECT
        id,
        name,
        start_date,
        end_date,
        CASE
          WHEN NOW() < start_date THEN 'Upcoming'
          WHEN NOW() BETWEEN start_date AND end_date THEN 'Live'
          ELSE 'Closed'
        END AS status
      FROM vote
      ORDER BY start_date DESC
    `;

        const result = await pool.query(query);

        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching elections data' });
    }
});

module.exports = router;
