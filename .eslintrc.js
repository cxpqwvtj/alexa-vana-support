module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    "plugin:jest/recommended"
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    sourceType: 'module'
  },
  plugins: [
    'jest'
  ],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-constant-condition': [0],
    indent: ['error', 2],
    'no-console': 'off',
    'array-bracket-spacing': ['error'],
    'brace-style': ['error'],
    'comma-spacing': ['error', {"before": false, "after": true}],
    'comma-style': ['error', "last"],
    'no-unused-vars': ['error', {'args': 'none'}]
  },
  "env": {
    "jest/globals": true
  },
  "globals": {
    "console": false,
    "module": false,
    "exports": false,
    "process": false
  }
}
