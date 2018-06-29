/**
 * @param {array} nums
 * @param {number} target
 * @return {array}
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
