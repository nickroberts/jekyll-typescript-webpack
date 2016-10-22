const env = process.env;
const ghpages = require('gh-pages');
const logger = require('./logger');

let user;
if (env.TRAVIS_BRANCH) {
  user = {
    name: 'Travis CI',
    email: 'nobody@nobody.org'
  };
}

logger.info('Deploying to gh-pages.');
ghpages.publish('_site', {
  user: user
}, (err) => {
  if (err) {
    logger.error('There was an error deploying to gh-pages.', err);
  } else {
    logger.info('Finished deploying to gh-pages.');
  }
});
