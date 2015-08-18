var express = require("express");
var router = module.exports = express.Router();

// The controllers
var homeController = require('../controllers/home.js');
var scheduleController = require('../controllers/meal.js');

// Home section
router.get('/', homeController.indexAction);

// Schedule section
router.post('/meal', scheduleController.newAction);
router.get('/meal/:id', scheduleController.indexAction);
