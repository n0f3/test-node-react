import { scrape } from '../utils/scraper';

const parse = (req, res, next) => {
  console.log(req.query);
  const { endpoint, tag: tags } = req.query;
  if (endpoint && tags) {
    scrape(endpoint, tags)
      .then(result => res.json(result))
      .catch(err => next(err));
  } else {
    res.status(400).send('Missing query param, both tag and endpoint are required');
  }
};

export default parse;
