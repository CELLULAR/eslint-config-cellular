module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['filenames', 'simple-import-sort'],
};
