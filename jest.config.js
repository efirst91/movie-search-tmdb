const config = {
  verbose: true,
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  roots: ['<rootDir>'],
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    "@config/(.*)$": "<rootDir>/src/app/config/$1",
    "@core/(.*)$": "<rootDir>/src/app/core/$1",
    "@data-access/(.*)$": "<rootDir>/src/app/data-access/$1",
    "@modules/(.*)$": "<rootDir>/src/app/modules/$1",
    "@shared/(.*)$": "<rootDir>/src/app/shared/$1",
    "@env/(.*)$": "<rootDir>/src/environments/$1",
    flat: '<rootDir>/node_modules/flat/index.js', // I need this because I use transloco as translate library
  },
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    '/node_modules/(?!flat)/', // Exclude 'flat' from transformations
  ],
};

module.exports = config;
