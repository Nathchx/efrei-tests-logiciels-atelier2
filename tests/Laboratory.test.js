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

    test('makeProductFromSubstances', () => {
        const test = new Laboratory(['A', 'B', 'C']);
        test.add('A', 10);
        test.add('B', 20);
        
        const produced = test.make('C', 5, { 'A': 2, 'B': 3 });
        
        expect(produced).toBe(5);
        expect(test.getQuantity('A')).toBe(0);
        expect(test.getQuantity('B')).toBe(5);
        expect(test.getQuantity('C')).toBe(5);
    });
});