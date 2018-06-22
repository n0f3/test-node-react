import rp from 'request-promise';
import cheerio from 'cheerio';

const getBodyToParse = (endpoint) => {
  if (!endpoint) {
    throw Error('Both end point and tag need to be valid');
  }

  const httpRegex = /^(https?):\/\//g
  const hasHttp = httpRegex.test(endpoint);
  if (!hasHttp) {
    endpoint = `http://${endpoint}`;
  }

  const requestPromiseOptions = {
    uri: endpoint,
    transform: body => cheerio.load(body),
  };
  return rp(requestPromiseOptions);
};

export const scrape = (endpoint, tags) => {
  return new Promise((resolve, reject) => {
    getBodyToParse(endpoint)
      .then(($) => {
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
        resolve(result);
      })
      .catch(error => reject(error));
  });
};

