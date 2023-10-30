/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  roots: ['<rootDir>'],
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    "@core/(.*)$": "<rootDir>/src/app/core/$1",
    "@config/(.*)$": "<rootDir>/src/app/config/$1",
    "@data-access/(.*)": "<rootDir>/src/app/data-access/$1",
    "@modules/(.*)": "<rootDir>/src/app/modules/$1",
    "@shared/(.*)": "<rootDir>/src/app/shared/$1",
    "@env/(.*)": "<rootDir>/src/environments/$1",
    flat: '<rootDir>/node_modules/flat/index.js',
  },

  // A preset that is used as a base for Jest's configuration
  preset: 'jest-preset-angular',

  // The test environment that will be used for testing
  testEnvironment: "jsdom",
  transformIgnorePatterns: ['node_modules/(?!.*\\.m?js$)'],
  moduleDirectories: ["node_modules"],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};

export default config;
