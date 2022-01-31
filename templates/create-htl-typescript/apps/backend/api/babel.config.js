module.exports = {
  extends: require.resolve('../../../babel.config.js'),
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './build',
          '@core': './build/core',
          '@http': './build/http',
          '@infra': './build/infra',
          '@bases': './build/bases',
          '@utils': './build/utils',
          '@config': './build/config',
        },
      },
    ],
  ],
};
