const express = require('express');
const router = express.Router();
const path = require('path');

router.get("/download/:filename", (req, res) => {
    const { filename } = req.params;
    res.download(path.join(__dirname, `../../public/curriculums/${filename}`));
});

module.exports = router;