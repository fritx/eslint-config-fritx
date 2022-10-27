module.exports = {
  extends: ['./', 'plugin:es/restrict-to-es2017'],
  env: {
    es2017: true, // es8/es2017
    // overrides
    es2018: false,
    es2019: false,
    es2020: false,
    es2021: false,
    es2022: false,
  },
  parserOptions: {
    ecmaVersion: 8 // es8/es2017
  },
}
