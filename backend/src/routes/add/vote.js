const express = require('express');
const router = express.Router();
const moment = require('moment');
const pool = require("../../connections/DB.connect.js");
const checkAdmin = require("../../middelwear/admin.js")

router.post('/',checkAdmin, async (req, res) => {
    try {
        const { name, description, start_date, end_date } = req.body;

        // Check required fields
        if (!name || !start_date || !end_date) {
            return res.status(400).json({ message: 'Name, start_date, and end_date are required.' });
        }

        // Convert DD-MM-YYYY to YYYY-MM-DD
        const formattedStartDate = moment(start_date, "DD-MM-YYYY").format("YYYY-MM-DD");
        const formattedEndDate = moment(end_date, "DD-MM-YYYY").format("YYYY-MM-DD");

        // Insert into database
        const insertQuery = `
            INSERT INTO vote (name, description, start_date, end_date)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        const result = await pool.query(insertQuery, [name, description, formattedStartDate, formattedEndDate]);

        res.status(201).json({
            message: 'Vote created successfully',
            vote: result.rows[0]
        });
    } catch (error) {
        console.error('Error adding vote:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// DELETE vote and related user_votes
router.delete('/:vote_id', async (req, res) => {
    const { vote_id } = req.params;

    try {
        // First, check if vote exists
        const check = await pool.query('SELECT * FROM vote WHERE id = $1', [vote_id]);

        if (check.rows.length === 0) {
            return res.status(404).json({ message: 'Vote not found' });
        }

        // Delete vote (user_votes will be auto-deleted due to ON DELETE CASCADE)
        await pool.query('DELETE FROM vote WHERE id = $1', [vote_id]);

        res.status(200).json({ message: 'Vote and associated user votes deleted successfully' });
    } catch (err) {
        console.error('Error deleting vote:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
