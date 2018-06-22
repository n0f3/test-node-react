
import express from 'express';
import path from 'path';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './routes/index';
const rootPath = process.cwd();


const configApp = (app) => {
  app.use(helmet());
  app.use(express.static(path.resolve(rootPath, 'dist')));

  app.use(morgan('combined'));

  app.use(router);

  app.get('/', (req, res) => {
    res.json({
      message: 'sup'
    });
    // res.sendFile(path.resolve(rootPath, 'dist', 'index.html'));
  });

  // catch 404 and forward to error handler
  app.use((req, res) => {
    res.status(404).send('Not Found');
  });

  // error handler
  app.use((err, req, res, next) => {
    console.log(`error: ${err}`);
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
