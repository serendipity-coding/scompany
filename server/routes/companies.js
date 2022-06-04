const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companies');

router.get('/:companyName', companyController.getScrappedCompanies);

module.exports = router;
