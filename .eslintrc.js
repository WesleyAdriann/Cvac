module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    'react-native/react-native': true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-native',
    '@typescript-eslint'
  ],
  rules: {
  },
  globals: {
    __DEV__: 'readonly'
  }
}
