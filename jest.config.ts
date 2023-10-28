import type {Config} from 'jest';

const config: Config = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/jest-setup.ts"],
  moduleDirectories: ["<rootDir>/../", "node_modules"],
  roots: ['<rootDir>'],
};

export default config;
