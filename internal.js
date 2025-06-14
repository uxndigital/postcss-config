"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    plugins: {
        'postcss-flexbugs-fixes': {},
        'postcss-preset-env': {
            autoprefixer: {
                flexbox: 'no-2009'
            },
            stage: 3
        },
        'postcss-jit-props': {},
        'postcss-utopia': {}
    }
};
exports.default = config;
