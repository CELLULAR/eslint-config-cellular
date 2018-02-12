const { pkg } = require('about-this-app');

const flowVersion = pkg.devDependencies['flow-bin'];

const withFlow = {
  extends: ['plugin:flowtype/recommended', 'prettier/flowtype'],
  plugins: ['flowtype'],
  settings: {
    react: {
      flowVersion,
    },
  },
};

module.exports = flowVersion ? withFlow : {};
