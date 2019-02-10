module.exports = ({ file, options, env }) => ({
  parser: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    autoprefixer: {
      browsers: ['last 2 versions', 'ie >= 9', 'android >= 4.4', 'ios >= 7']
    },
    cssnano: {}
  }
});
