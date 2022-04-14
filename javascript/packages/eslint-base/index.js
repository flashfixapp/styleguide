module.exports = {
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
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
    'no-restricted-exports': 'off', // doesn't let re-export defaults
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    'func-names': ['error', 'never'],
    'func-style': ['error', 'expression'], // completely disables function statements
    'object-curly-newline': 'off', // forces unnecessary linebreaks on destructuring
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'prefer-promise-reject-errors': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/no-named-as-default': 'off',
    'import/no-dynamic-require': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off', // too broken together with no-unresolved
    'import/no-unresolved': 'off', // alias support is too broken
  },
};
