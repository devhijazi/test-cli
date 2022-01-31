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
    'no-console': 'off',
    'no-restricted-syntax': 'off',
  },
};
