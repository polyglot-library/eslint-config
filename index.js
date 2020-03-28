module.exports = {
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'parserOptions': {
    'ecmaVersion': 2017
  },
  'env': {
    'jest': true,
    'browser': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'google'
  ],
  'plugins': [
    'babel',
    'react'
  ],
  'rules': {
    'comma-dangle': ['error', 'never'],
    'require-jsdoc': 0,
    'object-curly-spacing': ['error', 'always'],
    'babel/camelcase': ['error',
      {
        'ignoreDestructuring': true,
        'properties': 'never'
      }
    ],
    'max-len': ['error', {
      'code': 100,
      'tabWidth': 4,
      'ignoreComments': true,
      'ignoreTemplateLiterals': true,
      'ignoreRegExpLiterals': true,
      'ignoreUrls': true
    }]
  }
};
