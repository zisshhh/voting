const express = require('express');
const router = express.Router();
const pool = require("../../connections/DB.connect.js");
const isLoggedIn = require("../../middelwear/login.js")

router.get('/:id', isLoggedIn, async (req, res) => {
    const voteId = req.params.id;
    console.log(voteId);
    try {
        const result = await pool.query(`
            SELECT name, description, count_yes, count_no, start_date, end_date
            FROM vote WHERE id = $1
        `, [voteId]);

        if (result.rows.length === 0) return res.status(404).json({ message: 'Vote not found' });

        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching vote results' });
    }
});

module.exports = router;
