/**
 * es5-compat mode
 * requires `ni -D eslint-plugin-es5`
 */
module.exports = {
  extends: [
    'plugin:es5/no-es2015',
    'plugin:es5/no-es2016'
  ],
  env: {
    // overrides standard
    es2021: false
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
