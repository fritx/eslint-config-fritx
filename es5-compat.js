module.exports = {
  extends: [
    'plugin:es5/no-es2015',
    'plugin:es5/no-es2016'
  ],
  parserOptions: {
    // has to be `es6`, `es5` is not supported
    ecmaVersion: 2015 // equivalent to `es6`
  },
  rules: {
    'prefer-let/prefer-let': 0,
    'prefer-const': 0,
    'no-var': 0,
    'object-shorthand': [2, 'never'],
    'comma-dangle': [2, 'never']
  }
}
