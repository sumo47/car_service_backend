const express = require('express');
const { createLead, getAllLeads, getLeadById, deleteLead } = require('../controllers/leadController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// POST /api/leads - Create a new lead
router.post('/', createLead);

// GET /api/leads - Get all leads (admin use)
router.get('/', authMiddleware, getAllLeads);

// GET /api/leads/:id - Get a specific lead by ID
router.get('/:id', authMiddleware, getLeadById);

// DELETE /api/leads/:id - Delete a lead
router.delete('/:id', authMiddleware, deleteLead);

module.exports = router;
