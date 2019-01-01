export class StorageService {
    constructor(storage) {
        if (!storage) {
            throw new Error('StorageService contructor must be called with storage name');
        }

        this.storage = storage;
    }

    get(key) {
        let data = {};

        try {
            data = JSON.parse(localStorage.getItem(this.storage)) || {};
        } catch (e) {
            throw new Error(e);
        }

        const keys = Object.keys(data);

        return keys.includes(key)
            ? data[key]
            : null;
    }

    set(key, value) {
        let data = {};

        try {
            data = JSON.parse(localStorage.getItem(this.storage)) || {};
        } catch (e) {
            throw new Error(e);
        }

        const result = JSON.stringify({
            ...data,
            [key]: value,
        });

        localStorage.setItem(this.storage, result);
    }

    clear() {
        localStorage.removeItem(this.storage);
    }
}
