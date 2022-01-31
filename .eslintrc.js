module.exports = {
  root: true,
  extends: ['@hitechline', '@hitechline/eslint-config/typescript'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
