module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018
  },

  rules: {
    'linebreak-style': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js']
      }
    ]
  }
};
