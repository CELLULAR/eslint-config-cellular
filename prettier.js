const { hasFile, hasPkgProp } = require('about-this-app');
const builtIns = require('./prettier.config');

const hasPrettierRc =
  hasFile('.prettierrc') ||
  hasFile('.prettier.config.js') ||
  hasPkgProp('prettier');

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', hasPrettierRc ? null : builtIns],
  },
};
