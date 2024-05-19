const express = require('express');
const router = express.Router();
const paperController = require('../controller/paperController');


router.get('/GetPaper',paperController.GetPaper);
router.post('/AddPaper',paperController.AddPaper);
router.put('/UpdatePaper/:id',paperController.UpdatePaper);
router.get('/GetPaperById/:id',paperController.GetPaperById);
router.delete('/DeletePaperById/:id',paperController.DeletePaperById);

module.exports = router