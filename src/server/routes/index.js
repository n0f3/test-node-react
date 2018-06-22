import express from 'express';
import parse from './parse';
import contains from './contains';

const router = express.Router();

router.get('/parse', parse);
router.get('/contains', contains);

export default router;

