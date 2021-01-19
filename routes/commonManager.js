const express = require('express');
const router = express.Router();

const commonManager = require('../app/controllers/CommonManager');

router.post('/check_account', commonManager.check_account);
// router.post('/get_otp', commonManager.get_otp);
// router.post('/register', commonManager.register);
// router.post('/login', commonManager.login);
// router.post('/logout', commonManager.logout);
router.post('/get_profile', commonManager.get_profile);
// router.get('/users', commonManager.users);
// router.get('/farms', commonManager.farms);
// router.get('/zones', commonManager.zones);
// router.get('/modules', commonManager.modules);
// router.get('/ponds', commonManager.ponds);

module.exports = router;
