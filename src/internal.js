module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'custom-media-queries': true,
        'nesting-rules': true
      },
      browsers: 'last 2 versions, defaults, not dead'
    },
    'postcss-utopia': {}
  }
};
