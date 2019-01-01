import * as random from '@app/services/random';

describe('#random', () => {
    test('should be defined ', () => {
        expect(random).toBeDefined();
    });
});

describe('#random.value', () => {
    test('should be defined ', () => {
        expect(random.value).toBeDefined();
    });

    test('should be string ', () => {
        expect(typeof random.value()).toBe('string');
    });

    test('should be 64 digits length by default ', () => {
        expect(random.value()).toHaveLength(64);
    });

    test('should be 32 digits length', () => {
        expect(random.value(32)).toHaveLength(32);
    });

    test('should be 8 digits length', () => {
        expect(random.value(8)).toHaveLength(8);
    });

    test('should be 4 digits length', () => {
        expect(random.value(4)).toHaveLength(4);
    });


    test('should be 1000 runs with unique values', () => {
        const results = Array.from({ length: 1000 }, () => random.value());
        const uniqueValues = Array.from(new Set(results));

        expect(results).toHaveLength(1000);
        expect(uniqueValues).toHaveLength(1000);
    });

    test('should be 10 000 runs with unique values', () => {
        const results = Array.from({ length: 10000 }, () => random.value());
        const uniqueValues = Array.from(new Set(results));

        expect(results).toHaveLength(10000);
        expect(uniqueValues).toHaveLength(10000);
    });
});

describe('#random.range', () => {
    test('should be defined ', () => {
        expect(random.range).toBeDefined();
    });

    test('should be number ', () => {
        expect(typeof random.range()).toBe('number');
    });

    test('should be between 0 and 1000 by default ', () => {
        const value = random.range();

        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThanOrEqual(1000);
    });

    test('should be between 0 and 10 ', () => {
        const value = random.range(0, 10);

        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThanOrEqual(10);
    });
});
