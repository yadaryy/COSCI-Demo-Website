const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index',{isLoggedIn: req.session.isLoggedIn});
});

router.get('/login', (req,res) => {
    if (req.session.isLoggedIn) {
        res.redirect('/view',{isLoggedIn: req.session.isLoggedIn});
    } else {
        res.render('login', {isLoggedIn: req.session.isLoggedIn, isError: ''});
    }
});

router.get('/contact', (req,res) => {
    res.render('contact' ,{isLoggedIn: req.session.isLoggedIn, isError: ''});
});

router.get('/academic', (req,res) => {
    if (req.session.isLoggedIn) {
        res.render('academic');
    } else {
        res.render('login', {isLoggedIn: req.session.isLoggedIn, isError: 'Please Login First'});
    }
});

router.get('/admission', (req,res) => {
    res.render('admission' , {isLoggedIn: req.session.isLoggedIn});
});

router.get('/gallery', (req,res) => {
    res.render('gallery' , {isLoggedIn: req.session.isLoggedIn})
});

router.get('/signup', (req,res) => {
    res.render('signup');
});

module.exports = router;