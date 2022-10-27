module.exports = {
  extends: ['./', 'plugin:es/restrict-to-es2018'],
  env: {
    es2018: true, // es9/es2018
    // overrides
    es2019: false,
    es2020: false,
    es2021: false,
    es2022: false,
  },
  parserOptions: {
    ecmaVersion: 9 // es9/es2018
  },
}
