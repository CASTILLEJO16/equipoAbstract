module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'off',
    'jsx-no-undef': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
