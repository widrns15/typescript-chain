class LocalStorage {
    constructor() {
        this.storage = {};
    }
    // Create
    set(key, value) {
        if (this.storage[key] !== undefined) {
            return console.log(`${key}가 이미 존재합니다.`);
        }
        this.storage[key] = value;
    }
    // Read
    get(key) {
        if (this.storage[key] === undefined) {
            return console.log(`${key}가 존재하지 않습니다.`);
        }
        return this.storage[key];
    }
    // Update
    update(key, value) {
        if (this.storage[key] !== undefined) {
            this.storage[key] = value;
        }
        else {
            console.log(`${key}가 존재하지 않아 새로 만듭니다.`);
            this.storage[key] = value;
        }
    }
    // Delete
    remove(key) {
        if (this.storage[key] === undefined) {
            return console.log(`${key}가 존재하지 않습니다.`);
        }
        delete this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}
const stringsStorage = new LocalStorage();
stringsStorage.get("key");
stringsStorage.set("hello", "how are you?");
const booleanStorage = new LocalStorage();
booleanStorage.get(undefined);
booleanStorage.set("hello", true);
//# sourceMappingURL=index.js.map