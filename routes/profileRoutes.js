const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.get('/getUser',profileController.getProfile);
router.put('/:userId', profileController.updateProfile);
router.delete('/:userId', profileController.deleteProfile);

module.exports = router;
