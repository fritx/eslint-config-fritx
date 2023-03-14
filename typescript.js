module.exports = {
  extends: ['./'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        './standard-lite',
        './own-style'
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/triple-slash-reference': 0,
        '@typescript-eslint/no-extra-semi': 0,
        'no-undef': 0,
        'no-unused-vars': 0,
      }
    },
  ],
}
