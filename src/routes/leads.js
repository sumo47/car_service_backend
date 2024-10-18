const express = require('express');
const { createPrePurchaseInspection, createCarInsurance, createSellYourCar, createCarValuation, createKeyDuplication, createMyGarage, createConciergeService } = require('../controllers/leadController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// POST /api/leads - Create a new lead
router.post('/PrePurchaseInspection', createPrePurchaseInspection);
router.post('/CarInsurance', createCarInsurance);
router.post('/SellYourCar', createSellYourCar);
router.post('/CarValuation', createCarValuation);
router.post('/KeyDuplication', createKeyDuplication);
router.post('/MyGarage', authMiddleware, createMyGarage);
router.post('/ConciergeService', createConciergeService);

// GET /api/leads - Get all leads (admin use)
// router.get('/', authMiddleware, getAllLeads);

// GET /api/leads/:id - Get a specific lead by ID
// router.get('/:id', authMiddleware, getLeadById);

// DELETE /api/leads/:id - Delete a lead
// router.delete('/:id', authMiddleware, deleteLead);

router.all("/*", function (req, res) {
    return res.status(400).send({ status: false, message: "❌invalid path❌" })
})

module.exports = router;
