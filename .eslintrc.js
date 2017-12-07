module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['eslint:recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    sourceType: 'module'
  },
  plugins: [
  ],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: [2, 'never'],
    'no-constant-condition': [0],
    indent: ['error', 2],
    'no-console': 0
  }
}
