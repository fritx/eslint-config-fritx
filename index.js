module.exports = {
  extends: 'standard',
  plugins: ['prefer-let'],
  rules: {
    'prefer-let/prefer-let': 2,
    'prefer-const': 0,
    'space-before-function-paren': [2, { named: 'never' }],
    'arrow-parens': [2, 'as-needed'],
    'no-mixed-operators': 1,
    'no-unused-vars': 1,
    'comma-dangle': 0,
  }
}
