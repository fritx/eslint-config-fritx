module.exports = {
  env: {
    browser: false,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2022
  },
  globals: {
    // overrides standard
    document: 'off',
    navigator: 'off',
    window: 'off',
  },
}
