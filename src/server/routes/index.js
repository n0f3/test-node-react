// const express = require('express');
// const path = require('path');
// const auth = require('./auth');
// const fileManagement = require('./fileManagement');
// const { sendEmail } = require('../sparkPost');
// const router = express.Router();
// const rootPath = process.cwd();

// const { getApartments, createApartment, getSingleApartment, modifyApartment, deleteApartment } = require('./apartments');

// router.get('/parse', )

// module.exports = router;

import express from 'express';
import parse from './parse';

const router = express.Router();

router.get('/parse', parse);

export default router;

