const express = require('express');
const router = express.Router();
const pool = require("../../connections/DB.connect.js");
const isLoggedIn = require("../../middelwear/login.js")

router.post('/', isLoggedIn, async (req, res) => {
    const userId = req.user.id;
    const { vote_id, result } = req.body;

    if (!vote_id || !['yes', 'no'].includes(result)) {
        return res.status(400).json({ message: 'Invalid vote_id or result. Use result=yes or result=no' });
    }

    try {
        // Get vote info
        const voteResult = await pool.query('SELECT * FROM vote WHERE id = $1', [vote_id]);

        if (voteResult.rows.length === 0) {
            return res.status(404).json({ message: 'Vote not found.' });
        }

        const vote = voteResult.rows[0];

        // Check if vote has expired
        const now = new Date();
        const endDate = new Date(`${vote.end_date}T23:59:59`);

        if (now > endDate) {
            return res.status(403).json({ message: 'Voting period has ended.' });
        }

        // Check if user already voted
        const alreadyVoted = await pool.query(
            'SELECT * FROM user_votes WHERE user_id = $1 AND vote_id = $2',
            [userId, vote_id]
        );

        if (alreadyVoted.rows.length > 0) {
            return res.status(403).json({ message: 'You have already voted on this poll.' });
        }

        // Update count
        const countColumn = result === 'yes' ? 'count_yes' : 'count_no';
        await pool.query(`UPDATE vote SET ${countColumn} = ${countColumn} + 1 WHERE id = $1`, [vote_id]);

        // Insert vote log
        await pool.query(
            `INSERT INTO user_votes (user_id, vote_id) VALUES ($1, $2)`,
            [userId, vote_id]
        );

        res.status(200).json({ message: `Your '${result}' vote has been recorded.` });
    } catch (error) {
        console.error('Voting error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
