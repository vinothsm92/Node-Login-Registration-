const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));
const User = require('./usersdata');
// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>{
  User.getusers(req, res);
 }
);

module.exports = router;
