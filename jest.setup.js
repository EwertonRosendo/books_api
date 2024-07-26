import '@testing-library/jest-dom'

module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['app/javascript/components/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  };