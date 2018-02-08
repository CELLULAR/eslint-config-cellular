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
    'no-console': 0,
    'no-debugger': 0,
    'filenames/match-exported': 2,
    // "import/order": ["error", {"newlines-between": "always"}]
  },
};
