/**
 * es5-loose mode
 * works better with auto-fix
 * requires `ni -D eslint-plugin-es5 globals lodash`
 */
let { es5, es2015 } = require('globals')
let { difference } = require('lodash')

let keysPair = [es2015, es5].map(Object.keys)
let diffKeys = difference(...keysPair)

module.exports = {
  extends: './es5-compat',
  env: {
    es2015: true // equivalent to `es6`
  },
  globals: {
    // overrides es5...es2015
    // https://github.com/eslint/eslint/blob/d35fbbef895e8f4ac6eaf1756349230769a02b4d/conf/globals.js
    // https://github.com/sindresorhus/globals/blob/main/globals.json
    ...diffKeys.reduce((acc, k) => {
      acc[k] = 'off'
      return acc
    }, {})
  },
}
