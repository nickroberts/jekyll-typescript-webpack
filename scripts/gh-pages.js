const logger = require('./logger');

logger.info('Deploying to gh-pages.');
const ghpages = require('gh-pages');
ghpages.publish('_site', (err) => {
  if (err) {
    logger.error('There was an error deploying to gh-pages.', err);
  } else {
    logger.info('Finished deploying to gh-pages.');
  }
});
