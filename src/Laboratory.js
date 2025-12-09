class Laboratory {
    constructor(substances) {
        if (!substances || substances.length === 0) {
            throw new Error("Substance list cannot be empty");
        }
    }
}

module.exports = Laboratory;