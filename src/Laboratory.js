class Laboratory {
    constructor(substances) {
        this.substanceList = new Set();
        this.quantities = new Map();
        
        if (!substances || substances.length === 0) {
            throw new Error("Substance list cannot be empty");
        }
        
        for (const s of substances) {
            if (this.substanceList.has(s)) {
                throw new Error(`Duplicate substance: ${s}`);
            }
            this.substanceList.add(s);
            this.quantities.set(s, 0);
        }
    }

    getQuantity(substance) {
        if (!this.substanceList.has(substance)) {
            throw new Error(`Substance not found: ${substance}`);
        }
        return this.quantities.get(substance);
    }

    add(substance, qty) {
        if (!this.substanceList.has(substance) || qty < 0) {
            throw new Error(`Unknown substance (${substance}) or negative quantity (${qty})`);
        }
        const currentQty = this.quantities.get(substance);
        this.quantities.set(substance, currentQty + qty);
    }

    make(product, desiredQty, recipe) {
        if (!this.substanceList.has(product)) {
            throw new Error(`Unknown product: ${product}`);
        }

        let maxProducible = desiredQty;
        
        for (const [substance, qtyNeeded] of Object.entries(recipe)) {
            if (!this.substanceList.has(substance)) {
                throw new Error(`Unknown substance in recipe: ${substance}`);
            }
            const available = this.quantities.get(substance);
            const possibleWithThisSubstance = Math.floor(available / qtyNeeded);
            maxProducible = Math.min(maxProducible, possibleWithThisSubstance);
        }

        for (const [substance, qtyNeeded] of Object.entries(recipe)) {
            const currentQty = this.quantities.get(substance);
            this.quantities.set(substance, currentQty - (qtyNeeded * maxProducible));
        }

        const currentProductQty = this.quantities.get(product);
        this.quantities.set(product, currentProductQty + maxProducible);

        return maxProducible;
    }
}

module.exports = Laboratory;