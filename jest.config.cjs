// eslint-disable-next-line no-undef
module.exports = {
    testEnvironment: 'jest-environment-jsdom', // Correct test environment
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.cjs',
    },
    resolver: undefined,
};


