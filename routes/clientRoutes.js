const express = require('express')
const router = express.Router();
const clientController = require('../controller/clientController');

router.get('/GetClients',clientController.GetClients);
router.post('/AddClients',clientController.AddClients);
router.put('/UpdateClients/:id',clientController.UpdateClients);
router.get('/GetClientById/:id',clientController.GetClientById);
router.delete('/DeleteClientById/:id',clientController.DeleteClientById);

module.exports = router