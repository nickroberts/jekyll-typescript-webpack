const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const logger = require('./logger');

imagemin(['images/*.{jpg,png}'], '_site/images', {
  plugins: [
    imageminMozjpeg(),
    imageminPngquant()
  ]
}).then(files => {
  logger.info(`Optimized ${files.length} image${files.length === 1 ? '' : 's'}.`);
});
