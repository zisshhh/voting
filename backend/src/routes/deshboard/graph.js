
const express = require('express');
const router = express.Router();
const pool = require("../../connections/DB.connect.js");
const checkAdmin = require('../../middelwear/admin.js'); // Reuse your auth if needed

// GET /dashboard/graph
router.get('/',checkAdmin, async (req, res) => {
  try {
    const result = await pool.query(`
       SELECT 
        v.name AS election_name,
        COUNT(uv.id) AS voters
      FROM vote v
      LEFT JOIN user_votes uv ON v.id = uv.vote_id
      GROUP BY v.name
      ORDER BY v.name
    `);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch analytics' });
  }
});


module.exports = router;