module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    'react-native/react-native': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
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
  settings: {
    react: {
      version: '17.0.2'
    },
    'import/ignore': [
      'react-native'
    ],
    'import/resolver': {
      'babel-plugin-root-import': {
        'rootPathPrefix': '~',
        'rootPathSuffix': 'src'
      }
    }
  },
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
    'no-use-before-define': 'off',
    'indent': ['error', 2],
    'react-hooks/exhaustive-deps': 'warn'
  },
  globals: {
    __DEV__: 'readonly'
  }
}
