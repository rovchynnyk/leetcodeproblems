/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * 
 * Input: [1,2,3,4,5,6,7] and k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 * 
 */
const rotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        const sliced = nums.splice(-1);
        nums.splice(0, 0, ...sliced)
    }
};
