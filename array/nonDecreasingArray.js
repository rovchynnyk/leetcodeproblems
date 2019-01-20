/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * Given an array with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.
 * We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).
 *
 * Input: [4,2,3]
 * Output: True
 *
 */
var checkPossibility = function(nums) {
	let count = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i - 1] > nums[i]) {
			count++;
			if (count > 1) return false;
			if (nums[i - 2] > nums[i] && nums[i + 1] < nums[i - 1])
				return false;
		}
	}
	return true;
};
