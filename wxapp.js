
module.exports = {
  extends: ['./es2018'],
  env: {
    node: false,
    browser: false,
    'shared-node-browser': true,
    commonjs: true,
  },
  ignorePatterns: [
    'miniprogram_npm',
  ],
  globals: {
    wx: true,
    App: true,
    Page: true,
    getCurrentPages: true,
    getApp: true,
    Component: true,
    requirePlugin: true,
    requireMiniProgram: true,
  },
  overrides: [
    {
      files: '**/*.wxs',
      extends: [
        'eslint:recommended',
        './style',
        './es5-loose',
      ],
    },
  ],
}
