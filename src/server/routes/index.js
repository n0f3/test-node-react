import express from 'express';
import parse from './parse';

const router = express.Router();

router.get('/parse', parse);

export default router;

