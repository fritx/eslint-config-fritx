module.exports = {
  env: {
    browser: false,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2022
  },
  globals: {
    // overrides eslint-config-standard
    document: 'off',
    navigator: 'off',
    window: 'off',
  },
}
