import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    // process `*.tsx` files with `ts-jest`
  },
  rootDir: 'src',
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(svg)$': 'identity-obj-proxy',
    '^@assets/(.*)$': '<rootDir>/assets/$1',
    '^@utils/(.*)$': '<rootDir>/utils/$1',
    '^@views/(.*)$': '<rootDir>/views/$1',
    '^@hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@services/(.*)$': '<rootDir>/services/$1',
    '^@components/(.*)$': '<rootDir>/components/$1',
  },
};

export default createJestConfig(config);
