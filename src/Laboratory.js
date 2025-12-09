class Laboratory {
    constructor(substances) {
        this.substanceList = [];
        
        if (!substances || substances.length === 0) {
            throw new Error("Substance list cannot be empty");
        }
        
        for (const s of substances) {
            if (this.substanceList.includes(s)) {
                throw new Error(`Duplicate substance: ${s}`);
            }
            this.substanceList.push(s);
        }
    }

    getQuantity(substance) {
        if (!this.substanceList.includes(substance)) {
            throw new Error(`Substance not found: ${substance}`);
        }
        return 0;
    }
}

module.exports = Laboratory;