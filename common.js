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
  plugins: ['filenames', 'simple-import-sort'],
  rules: {
    'simple-import-sort/sort': 'error',
    'filenames/match-exported': 2,
  },
};
