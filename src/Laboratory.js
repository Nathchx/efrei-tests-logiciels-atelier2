class Laboratory {
    constructor(substances) {
        if (!substances || substances.length === 0) {
            throw new Error("Substance list cannot be empty");
        }
    }

    getQuantity(substance) {
        return -1.0;
    }
}

module.exports = Laboratory;