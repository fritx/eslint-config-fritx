/**
 * es5-loose mode
 * works better with auto-fix
 * requires `ni -D eslint-plugin-es5`
 */
module.exports = {
  extends: './es5-compat',
  parserOptions: {
    ecmaVersion: 6 // es6/es2015
  }
}
