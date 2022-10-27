module.exports = {
  plugins: ['prefer-let'],
  rules: {
    // semi
    'no-extra-semi': 0,
    // quote
    'quote-props': 0,
    // comma
    'comma-dangle': 0,
    // paren
    'space-before-function-paren': [2, { named: 'never' }],
    'arrow-parens': [2, 'as-needed'],
    // var/let/const
    'prefer-let/prefer-let': 2,
    'prefer-const': 0,
    // overrides error => warn
    'no-unused-vars': 1,
  },
}
