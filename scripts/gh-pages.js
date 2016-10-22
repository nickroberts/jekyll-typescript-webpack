const env = process.env;
const logger = require('./logger');

logger.info('Deploying to gh-pages.');
if (env.TRAVIS_BRANCH === 'master') {
  const execSync = require("child_process").execSync;
  let command = 'cd _site && ' +
    'git config user.name "Travis CI" && ' +
    'git config user.email "nobody@nobody.org" && ' +
    'git init && ' +
    'git add . && ' +
    'git commit -m "Travis is pushing it...pushing it real good" && ' +
    'git push --force --quiet "https://' + env.GITHUB_TOKEN + '@github.com/jekyll-typescript-webpack.git" master:gh-pages';
  execSync(command, {
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
