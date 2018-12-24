/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), 
 * prove that at least one duplicate number must exist. Assume that there is only one duplicate number, 
 * find the duplicate one.
 * 
 * Input: [1,3,4,2,2]
 * Output: 2
 *
 */
var findDuplicate = function(nums) {
    const sorted = nums.sort((a, b) => a - b);
    let el;
    
    for (let i = 1, len = sorted.length; i < len; i++) {
        if (sorted[i] === sorted[i - 1]) {
            el = sorted[i];
            break;
        }
    }
    
    return el;
};