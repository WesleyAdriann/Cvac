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
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
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
    'no-use-before-define': 'off'
  },
  globals: {
    __DEV__: 'readonly'
  }
}
