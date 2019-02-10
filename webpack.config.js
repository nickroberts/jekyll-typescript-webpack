module.exports = env => require(`./config/webpack.${env || 'dev'}.js`);
