import { StorageService } from '@app/services/storage';

describe('#storage', () => {
    const service  = new StorageService('jest_storage');

    test('constructor should throw exception with emty arguments', () => {
        expect(() => new StorageService()).toThrow();
    });

    test('should be defined', () => {
        expect(service).toBeDefined();
    });

    test('storage name should be defined', () => {
        expect(service.storage).toBeDefined();
        expect(service.storage).toBe('jest_storage');
    });
});

describe('#storage.clear', () => {
    const service  = new StorageService('jest_storage');

    afterEach(() => localStorage.clear());

    test('should be defined', () => {
        expect(service.clear).toBeDefined();
    });

    test('should clear storage', () => {
        localStorage.setItem('jest_storage', 'foo');

        expect(localStorage.getItem('jest_storage')).toBe('foo');

        service.clear();
        expect(localStorage.getItem('jest_storage')).toBeNull();
    });
});

describe('#storage.set', () => {
    const service  = new StorageService('jest_storage');

    afterEach(() => service.clear());

    test('should be defined', () => {
        expect(service.set).toBeDefined();
    });

    test('should be correct value in empty storage', () => {
        const expected = {
            foo: 'bar',
        };

        service.set('foo', 'bar');

        expect(localStorage.getItem('jest_storage')).toBe(JSON.stringify(expected));
    });

    test('should be correct value in non empty storage', () => {
        const expected = {
            foo: 'bar',
            foo1: 'bar1',
        };

        service.set('foo', 'bar');
        service.set('foo1', 'bar1');

        expect(localStorage.getItem('jest_storage')).toBe(JSON.stringify(expected));
    });
});

describe('#storage.get', () => {
    const service  = new StorageService('jest_storage');

    afterEach(() => service.clear());

    test('should be defined', () => {
        expect(service.get).toBeDefined();
    });

    test('should be null', () => {
        expect(service.get('key')).toBeNull();
    });

    test('should be expected value', () => {
        service.set('foo', 'bar');

        expect(service.get('foo')).toBe('bar');
    });
});
