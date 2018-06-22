import { findTagWithText } from '../utils/scraper';

const contains = (req, res, next) => {
  const { endpoint, tag, text } = req.query;
  if (!endpoint || !tag || !text) {
    res.status(400).send('Missing query param, or wrong number of parameters. Tag needs a text value to search for');
  }
  findTagWithText(endpoint, tag, text)
    .then(result => res.json(result))
    .catch(err => next(err));
};

export default contains;
