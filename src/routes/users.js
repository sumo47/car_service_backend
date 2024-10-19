const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// POST /api/users/register - Register new user
router.post('/register', registerUser);

// POST /api/users/login - Login user
router.post('/login', loginUser);

// GET /api/users/me - Get user profile
router.get('/me', authMiddleware, getUserProfile);

router.all("/*",(req,res)=>res.status(400).send({status:false, msg:"Invalid path"}))

module.exports = router;
