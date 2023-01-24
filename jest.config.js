// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pathsToModuleNameMapper } = require('ts-jest');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.tsx',
    'src/core/**/*.ts',
    '!src/core/infra/**/*.ts',
    '!src/**/*.{spec,test}.tsx',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],

  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },

  modulePaths: [compilerOptions.baseUrl],

  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>',
    }),
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
};
