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

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  // moduleNameMapper: {},

  // A preset that is used as a base for Jest's configuration
  preset: 'jest-preset-angular',

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  moduleDirectories: ["<rootDir>/../", "node_modules"],
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
};

export default config;
