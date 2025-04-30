/**
 * Adds two numbers if `add` is true. Returns false otherwise.
 * @param {*} num1 
 * @param {*} num2 
 * @param {*} add 
 * @returns sum or false
 */
function sumValues(num1, num2, add) {
    if (add) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') return false;
        return num1 + num2;
    } else {
        return false;
    }
}

/**
 * Applies a discount to an array of prices.
 * @param {*} prices 
 * @param {*} discount 
 * @returns array of discounted prices or false if invalid input
 */
function discountPrices(prices, discount) {
    if (!Array.isArray(prices) || typeof discount !== 'number') return false;
    if (prices.length === 0) return false;

    const discounted = [];
    for (let i = 0; i < prices.length; i++) {
        discounted.push(prices[i] * (1 - discount));
    }

    return discounted;
}

module.exports = { sumValues, discountPrices };
