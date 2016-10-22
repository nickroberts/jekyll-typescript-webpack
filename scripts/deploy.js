const env = process.env;
const execSync = require("child_process").execSync;
const logger = require('./logger');

if (env.TRAVIS_BRANCH === 'prod') {
  runDeploy('npm run deploy:prod');
} else if (env.TRAVIS_BRANCH === 'master') {
  runDeploy('npm run deploy:gh-pages');
} else {
  logger.info(`No need to deploy on branch ${env.TRAVIS_BRANCH}`);
}

function runDeploy(script) {
  logger.info(`Starting deploy for branch ${env.TRAVIS_BRANCH}`);
  execSync(script, {
    env: env,
    stdio: 'inherit'
  });
  logger.info(`Finished deploy for branch ${env.TRAVIS_BRANCH}`);
}
