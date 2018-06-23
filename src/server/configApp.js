
import express from 'express';
import path from 'path';
import helmet from 'helmet';
import morgan from 'morgan';
import apiRouter from './routes/apiRouter';
const rootPath = process.cwd();


const configApp = (app) => {
  app.use(helmet());
  app.use(express.static(path.resolve(rootPath, 'dist')));

  app.use(morgan('combined'));

  app.use('/api', apiRouter);

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(rootPath, 'dist', 'index.html'));
  });

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send({
      message: err.message,
      stack: err.stac,
      error: err,
    });
  });


  return app;
};

export default configApp;
