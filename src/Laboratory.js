class Laboratory {
    constructor(substances) {
        this.substanceList = new Set();
        
        if (!substances || substances.length === 0) {
            throw new Error("Substance list cannot be empty");
        }
        
        for (const s of substances) {
            if (this.substanceList.has(s)) {
                throw new Error(`Duplicate substance: ${s}`);
            }
            this.substanceList.add(s);
        }
    }

    getQuantity(substance) {
        if (!this.substanceList.has(substance)) {
            throw new Error(`Substance not found: ${substance}`);
        }
        return 0;
    }

    add(substance, qty) {
        
    }
}

module.exports = Laboratory;