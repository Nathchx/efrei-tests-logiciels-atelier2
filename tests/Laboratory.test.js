const Laboratory = require('../src/Laboratory');

describe('Laboratory', () => {
    test('initWithEmptySubstanceListThrowsError', () => {
        expect(() => {
            new Laboratory([]);
        }).toThrow(Error);
    });
});