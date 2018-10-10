/**
 * @param {array} nums
 * @param {number} target
 * @return {array}
 * 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 */
const twoSum = function(nums, target) {
    let indices = []; 
    for (let i = 0, outerLen = nums.length; i < outerLen; i++) {
        for (let j = i + 1, innerLen = nums.length; j < innerLen; j++) {
            if (nums[i] + nums[j] === target) {
                indices.push(i, j);
                break;
            }
        }
    }  
    return indices;
};
