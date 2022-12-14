/**
 * es5-compat mode
 */
module.exports = {
  extends: ['./', 'plugin:es/restrict-to-es5'],
  env: {
    // overrides
    es6: false,
    es2016: false,
    es2017: false,
    es2018: false,
    es2019: false,
    es2020: false,
    es2021: false,
    es2022: false,
  },
  parserOptions: {
    ecmaVersion: 5,
    // overrides standard
    sourceType: 'script'
  },
  rules: {
    // should use `var` over `let/const`
    'prefer-let/prefer-let': 0,
    'prefer-const': 0,
    'no-var': 0,
    // overrides standard
    'object-shorthand': [2, 'never'],
    'comma-dangle': [2, 'never']
  }
}
