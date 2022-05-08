/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
    return [...n.toString(2)].filter(v => v === '1').length
};