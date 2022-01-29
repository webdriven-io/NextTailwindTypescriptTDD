module.exports = {
    testEnvironment: 'jsdom',
    clearMocks: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text-summary', 'lcov', 'json-summary'],
    resetMocks: true,
    resetModules: true,
    restoreMocks: true
}
