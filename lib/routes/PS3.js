// Import express library and controller
const express = require('express');
const PS3Controller = require('../controllers/PS3');

const PS3Router=express.Router();

PS3Router.get('/', PS3Controller.index);

module.exports=PS3Router