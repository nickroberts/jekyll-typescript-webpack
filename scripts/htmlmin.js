const logger = require('./logger');
const minify = require('html-minifier').minify;
const glob = require('glob');
const fs = require('fs');

let options = {
  collapseWhitespace: true,
  conservativeCollapse: true
};

logger.info(`Starting minifying html.`);

try {

  let files = glob.sync('_site/**/*.html');

  files.forEach((file => fs.writeFileSync(file, minify(fs.readFileSync(file, 'utf8'), options))));

  logger.info(`Finished minifying ${files.length} html file${files.length === 1 ? '' : 's'}.`);

} catch (e) {

  logger.error('There was an error minifying the html files.', e);

}
