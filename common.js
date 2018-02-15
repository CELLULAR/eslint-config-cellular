const production = process.env.NODE_ENV == 'production';

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['filenames'],
  rules: {
    'no-console': [production ? 2 : 1, { allow: ['error', 'warn', 'info'] }],
    'no-debugger': production ? 2 : 1,
    'filenames/match-exported': 2,
    // "import/order": ["error", {"newlines-between": "always"}]
  },
};
