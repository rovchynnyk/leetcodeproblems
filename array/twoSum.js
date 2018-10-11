/**
 * @param {array} nums
 * @param {number} target
 * @return {array}
 * 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9, 
 * return [0, 1].
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
