const winston = require('winston');
const tsFormat = () => `[${(new Date())
  .toISOString()
  .replace(/T/, ' ')
  .replace(/\..+/, '')}]`;
winston.level = 'info';
const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true
    })
  ]
});
module.exports = logger;
