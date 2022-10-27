
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
    Component: true,
    Behavior: true,
    Page: true,
    getCurrentPages: true,
    getApp: true,
    requireMiniProgram: true,
    requirePlugin: true,
  },
  overrides: [
    {
      files: '**/*.wxs',
      extends: [
        'eslint:recommended',
        './own-style',
        './es5-loose',
      ],
    },
  ],
}
