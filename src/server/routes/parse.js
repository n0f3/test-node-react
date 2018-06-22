import request from 'request';

const parse = (req, res, next) => {
  console.log(req.query);
  let endpoint = req.query.endpoint;
  const tag = req.query.tag;
  if (endpoint && tag) {
    const httpRegex = /^(https?):\/\//g
    const hasHttp = httpRegex.test(endpoint);
    if (!hasHttp) {
      endpoint = `http://${endpoint}`;
    }
    request(endpoint, (error, response, body) => {
      if (error) {
        return next(error);
      }
      console.log(response);
      console.log(body);
    });
  } else {
    res.status(400).send('Missing query param, both tag and endpoint are required');
  }
};

export default parse;
