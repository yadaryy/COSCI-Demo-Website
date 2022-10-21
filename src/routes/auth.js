const express = require('express');
const router = express.Router();

router.post("/login", (req, res) => {
    const {username, password} = req.body;

    if (req.session.isLoggedIn) {
        res.redirect('/');
    } else {
     if (username === 'co631010313' && password === '12345') {
            req.session.isLoggedIn = true;
            res.redirect('/view');
        } else {
            res.redirect('/view/error');
        }
    }
});

router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.redirect('/view/error');
        }
        res.redirect('/view/login');
    })
});



module.exports = router;