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

    test('initWithDuplicateSubstanceListThrowsError', () => {
        expect(() => {
            new Laboratory(['A', 'B', 'A']);
        }).toThrow(Error);
    });

    test('addUnknownSubstanceThrowsError', () => {
        const test = new Laboratory(['A', 'B']);
        expect(() => {
            test.add('C', 0.5);
        }).toThrow(Error);
    });

    test('addKnownSubstanceWithNegativeQuantityThrowsError', () => {
        const test = new Laboratory(['A', 'B']);
        expect(() => {
            test.add('A', -0.5);
        }).toThrow(Error);
    });
});