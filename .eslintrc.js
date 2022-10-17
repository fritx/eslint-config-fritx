module.exports = {
  extends: 'standard',
  plugins: ['prefer-let'],
  rules: {
    'prefer-let/prefer-let': 2,
    'prefer-const': 0,
    'space-before-function-paren': ['error', { named: 'never' }],
    'arrow-parens': ['error', 'as-needed']
  }
}
