const express = require('express');
const { protect } = require('../middleware/admin');
const Admin = require('../models/Admin');
const Dashboard = require('../models/Dashboard');
const router = express.Router();
const { login } = require('../controller/authAdmin');
router.post('/login', login);
// admin --> middleware --->  dashboard
router.post('/dashboard', protect, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await Admin.findById(userId);
        const { moviename, desc, poster, duration, trailer, showTime } = req.body;
        try {
            const user = await Dashboard.create({
                moviename,
                desc,
                poster,
                duration,
                trailer,
                showTime
            })
            return res.status(200).json({
                success: true,
                message: "UPLOADED SUCCESSFULLY"
            })
        } catch (error) {
            return res.status(500).send({
                success: false,
                error: error.message
            })
        }

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});


module.exports = router;