import { findTags } from '../utils/scraper';

const parse = (req, res, next) => {
  const { endpoint, tag: tags } = req.query;
  if (endpoint && tags) {
    findTags(endpoint, tags.split(','))
      .then(result => res.json(result))
      .catch(err => next(err));
  } else {
    res.status(400).send('Missing query param, both tag and endpoint are required');
  }
};

export default parse;
