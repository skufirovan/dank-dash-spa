module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect', // Автоматически определяет версию React
    },
  },
  env: {
    browser: true, // Определяет глобальные переменные браузера
    es2021: true,
  },
  extends: [
    'eslint:recommended', // Базовые правила ESLint
    'plugin:react/recommended', // Рекомендованные правила React
    'plugin:@typescript-eslint/recommended', // Рекомендованные правила TypeScript
    'plugin:jsx-a11y/recommended', // Правила доступности для JSX
    'plugin:react-hooks/recommended', // Правила для хуков React
    'airbnb', // Airbnb стиль
    'airbnb-typescript', // Airbnb + TypeScript поддержка
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off', // Не нужен импорт React в JSX (если React 17+)
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'warn',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
