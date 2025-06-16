import type { Config } from 'postcss-load-config';

const config: Config = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    },
    "postcss-jit-props": {
			files: ["./src/**/*.css"],
		},
    'postcss-utopia': {}
  }
} as const;

export default config; 