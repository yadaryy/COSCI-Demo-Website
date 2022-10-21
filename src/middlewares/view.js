const express = require('express');
const router = express.Router();

router.use('/', require('../routes/view'));

module.exports = router;