module.exports = {
  root: true,
  extends: ['tui/es6', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    babelOptions: {
      rootMode: 'upward',
    },
  },
  ignorePatterns: ['node_modules/*', 'dist', 'examples'],
  rules: {
    'prettier/prettier': 0,
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: true, object: true },
        AssignmentExpression: { array: false, object: false },
      },
    ],
  },
};
