const env = process.env;
const execSync = require("child_process").execSync;
const logger = require('./logger');

if (env.TRAVIS_BRANCH === 'prod') {
  runBuild('npm run build:prod');
} else {
  runBuild('npm run build:gh-pages');
}

function runBuild(script) {
  logger.info(`Starting build for branch ${env.TRAVIS_BRANCH}`);
  execSync(script, {
    env: env,
    stdio: 'inherit'
  });
  logger.info(`Finished build for branch ${env.TRAVIS_BRANCH}`);
}
