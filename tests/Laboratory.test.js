const Laboratory = require('../src/Laboratory');

describe('Laboratory', () => {
    test('initWithEmptySubstanceListThrowsError', () => {
        expect(() => {
            new Laboratory([]);
        }).toThrow(Error);
    });

    test('initWithRegularSubstanceList', () => {
        const test = new Laboratory(['A', 'B']);
        expect(test.getQuantity('A')).toBe(0);
        expect(test.getQuantity('B')).toBe(0);
        expect(() => {
            test.getQuantity('C');
        }).toThrow(Error);
    });

    test('initWithNullSubstanceListThrowsError', () => {
        expect(() => {
            new Laboratory(null);
        }).toThrow(Error);
    });
});