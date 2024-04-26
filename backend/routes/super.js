const express = require('express');
const { protect } = require('../middleware/super');
const Super = require('../models/Super');
const Admin = require('../models/Admin');
const router = express.Router();

const { register, login } = require('../controller/authSuper');

router.post('/register', register); //update 

router.post('/login', login);

router.post('/addAdmin', protect, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await Super.findById(userId).select('-password');
        // res.status(200).send({
        //     success: true,
        //     data: user
        // })
        const { username, email, password } = req.body;
        try {
            const user = await Admin.create({
                username,
                email,
                password
            })
            return res.status(200).json({
                success: true,
                message: "Registered Successfully"
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

// admin --> middleware --->  dashboard
//router.post('/forgotpassword',forgotpassword);

//router.put('/resetpassword/:resetToken',resetpassword);

module.exports = router;