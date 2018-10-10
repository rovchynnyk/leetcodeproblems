/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
 * 
 */
var arrayPairSum = function(nums) {    
    let sum = 0;
    
    nums.sort((a, b) => a - b);
    
    for (let i = 0, len = nums.length; i < len; i = i + 2) {
        sum += Math.min(nums[i], nums[i + 1] || 0);
    }
    
    return sum;
};
