const express = require('express');
const router = express.Router();
const httpStatus = require('http-status');
const employeeController = require('../controllers/EmployeeController');

router.get('/', employeeController.list);
router.post('/', employeeController.createAndUpate);
router.delete('/:id', employeeController.destroy);


module.exports = router;


