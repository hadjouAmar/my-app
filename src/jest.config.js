module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Create this file if it doesn't exist
    snapshotSerializers: ['jest-image-snapshot-serializer'],
};

// jest.config.js
module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
};
