module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'flashfix-base',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-no-bind': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-multi-spaces': 'off', // allows logical prop grouping
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/no-danger': 'off',
    'react/jsx-max-props-per-line': ['error', { maximum: 3, when: 'multiline' }],
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'lifecycle',
        '/^(get|set)(?!(DefaultState$|DefaultProps$|ChildContext$)).+$/',
        '/^(get|set).+$/',
        'everything-else',
        '/^handle.+$/',
        '/^render.+$/',
        'render',
      ],
    }],
    'react/destructuring-assignment': 'off', // not always convenient
    'react/jsx-uses-react': 'off',
    'react/no-unused-class-component-methods': 'off',
    'react-hooks/exhaustive-deps': 'off', // doesn't work well enough with custom hooks
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],

    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
  },
};
