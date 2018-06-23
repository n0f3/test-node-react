import express from 'express';
import parse from './parse';
import contains from './contains';

const apiRouter = express.Router();

apiRouter.get('/parse', parse);
apiRouter.get('/contains', contains);

export default apiRouter;

