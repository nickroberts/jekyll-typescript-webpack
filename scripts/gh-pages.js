const env = process.env;
const logger = require('./logger');

logger.info('Deploying to gh-pages.');
if (env.TRAVIS_BRANCH === 'master') {
  const execSync = require("child_process").execSync;
  execSync('./scripts/gh-pages.sh', {
    env: env,
    stdio: 'inherit'
  });
  logger.info('Finished deploying to gh-pages.');
} else {
  const ghpages = require('gh-pages');
  ghpages.publish('_site', (err) => {
    if (err) {
      logger.error('There was an error deploying to gh-pages.', err);
    } else {
      logger.info('Finished deploying to gh-pages.');
    }
  });
}
