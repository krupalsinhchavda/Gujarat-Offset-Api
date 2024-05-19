const express = require('express');
const router = express.Router();
const chemicalController = require('../controller/chemicalController');

router.get('/GetChemical',chemicalController.GetChemical);
router.post('/AddChemical',chemicalController.AddChemical);
router.put('/UpdateChemical/:id',chemicalController.UpdateChemical);

module.exports = router;