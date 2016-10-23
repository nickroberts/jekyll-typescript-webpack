const env = process.env;
const execSync = require("child_process").execSync;
const logger = require('./logger');

if (env.TRAVIS_BRANCH === 'master') {

  logger.info('Deploying to gh-pages.');

  let script = `cd _site
git config --global user.name "Travis CI"
git config --global user.email "nobody@nobody.org"
git init
git add .
git commit -m "Travis is pushing it...pushing it real good :)"
git push --force --quiet "https://${env.GITHUB_TOKEN}@github.com/nickroberts/jekyll-typescript-webpack.git" master:gh-pages > /dev/null 2>&1`;

  execSync(script, {
    env: env,
    stdio: 'inherit'
  });

  logger.info('Fininshed deploying to gh-pages.');

} else {

  logger.info('Travis doesn\'t get to push it :(');

}
