import request from 'request';
import cheerio from 'cheerio';

const parse = (req, res, next) => {
  console.log(req.query);
  let endpoint = req.query.endpoint;
  const tags = req.query.tag;
  if (endpoint && tags) {
    const httpRegex = /^(https?):\/\//g
    const hasHttp = httpRegex.test(endpoint);
    if (!hasHttp) {
      endpoint = `http://${endpoint}`;
    }
    request(endpoint, (error, response, html) => {
      if (error) {
        return next(error);
      }
      const $ = cheerio.load(html);
      const result = {};
      tags.forEach((tag) => {
        $(tag).each((i, element) => {
          if (!result[tag]) {
            result[tag] = [];
          }
          result[tag].push({
            innerText: $(element).text(),
            innerHTML: $(element).html(),
          });
        });
      });
      res.json(result);
    });
  } else {
    res.status(400).send('Missing query param, both tag and endpoint are required');
  }
};

export default parse;
