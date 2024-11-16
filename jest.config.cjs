module.exports = {
  testEnvironment: 'jest-environment-jsdom', // Explicitly specify jsdom
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};

