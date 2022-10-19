module.exports = {
  extends: [
    'plugin:es/restrict-to-es2017',
  ],
  env: {
    es2017: true, // es8/es2017
    // overrides standard
    es2021: false,
  },
  parserOptions: {
    ecmaVersion: 8 // es8/es2017
  },
}
