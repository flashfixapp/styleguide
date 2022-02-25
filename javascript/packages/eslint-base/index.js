module.exports = {
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
  },
  rules: {
    'no-console': 'off',
    'default-case': 'off',
    'global-require': 'off', // breaks dynamic module loading in nodeland
    'no-restricted-syntax': [
      'error',

      'LabeledStatement',
      'WithStatement',
      'YieldExpression',
    ],
    camelcase: 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'prefer-destructuring': 'off', // not always convenient
    'consistent-return': 'off',
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 0 }],
    'default-param-last': 'off',
    'no-underscore-dangle': 'off',
    'no-floating-decimal': 'off',
    'no-continue': 'off',
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    'func-names': ['error', 'never'],
    'func-style': ['error', 'expression'], // completely disables function statements
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'prefer-promise-reject-errors': 'off',
    'import/no-named-as-default': 'off',
    'import/no-dynamic-require': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'never'],
  },
};
