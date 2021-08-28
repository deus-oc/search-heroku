const express = require('express');
const router = express.Router();
const { getSearchData } = require('../controllers/searchData');

router
.route('/')
.get(getSearchData);
module.exports =  router;