const { alias } = require('react-app-rewire-alias');

const aliasMap = {
  '@components': 'src/components',
  '@styles': 'src/styles',
  '@pages': 'src/pages',
  '@assets': 'src/assets',
  '@utils': 'src/utils',
  '@store': 'src/store',
  '@const': 'src/const',
};

module.exports = alias(aliasMap);
