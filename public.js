module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'custom-media-queries': true,
        'nesting-rules': true
      },
      browsers: '> 0.3% in US, > 0.3% in CN, defaults, not dead'
    },
    'postcss-utopia': {}
  }
};
