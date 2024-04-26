const express = require('express');
const router = express.Router();

const {register,login,dashboard} = require('../controller/auth');

router.post('/register',register);

router.post('/login',login);
router.post('/dashboard',dashboard);

//router.post('/forgotpassword',forgotpassword);

//router.put('/resetpassword/:resetToken',resetpassword);

module.exports = router;