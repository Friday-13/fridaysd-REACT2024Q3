export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    // process `*.tsx` files with `ts-jest`
  },
  rootDir: 'src',
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@assets/(.*)$': '<rootDir>/assets/$1',
    '^@views/(.*)$': '<rootDir>/views/$1',
    '^@hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@services/(.*)$': '<rootDir>/services/$1',
    '^@components/(.*)$': '<rootDir>/components/$1',
  },
};
