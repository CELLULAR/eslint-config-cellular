module.exports = {
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/jsx-no-target-blank': 0,
    'react/no-unescaped-entities': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-boolean-value': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/prop-types': 0,
  },
};
