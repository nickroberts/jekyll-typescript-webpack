const { minify } = require('html-minifier');
const glob = require('glob');
const fs = require('fs');
let options = {
  collapseWhitespace: true,
  conservativeCollapse: true,
  minifyCSS: true,
  minifyJS: true
};
console.log('Starting minifying html.');
try {
  let files = glob.sync('_site/**/*.html');
  files.forEach(file => fs.writeFileSync(file, minify(fs.readFileSync(file, 'utf8'), options)));
  console.log(`Finished minifying ${files.length} html file${files.length === 1 ? '' : 's'}.`);
} catch (e) {
  console.error('There was an error minifying the html files.', e);
}
