const { hasDevDep } = require('about-this-app');

const rules = {
  'react/jsx-no-target-blank': 0,
  'react/no-unescaped-entities': 0,
};

if (hasDevDep('flow-bin')) rules['react/prop-types'] = 0;

module.exports = {
  extends: ['plugin:react/recommended', 'prettier/react'],
  plugins: ['react'],
  rules,
};
