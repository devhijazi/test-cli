const { resolve } = require('path');

module.exports = {
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: resolve(__dirname, 'tsconfig.json'),
      },
    },
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',

    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
  },
};
