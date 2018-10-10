/**
 * @param {number} n - a positive integer
 * @return {number}
 * 
 * Write a function that takes an unsigned integer and returns the number of '1' bits it has
 * 
 */
var hammingWeight = function(n) {
    const binaryN = n.toString(2);    
    return [].filter.call(binaryN, el => el == 1).length;
};