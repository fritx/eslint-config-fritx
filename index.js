module.exports = {
  overrides: [
    {
      files: ['**/*.js', '**/*.cjs'],
      extends: [
        'eslint:recommended',
        './standard-lite',
        './own-style',
      ],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
      },
    },
    {
      files: '**/.eslintrc.{js,cjs}',
      env: {
        commonjs: true
      }
    },
  ],
}
