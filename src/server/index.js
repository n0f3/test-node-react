import http from 'http';
import app from './app';

const port = process.env.PORT || 3010;
const env = process.env.NODE_ENV || 'production';
const server = http.createServer(app);


server.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log(`Server listening on port ${port}`);
});
