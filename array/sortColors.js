/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
	/* counting sort
    const RANGE = 3;
    let count = new Array(RANGE).fill(0);
    let output = new Array(nums.length);
    let i;

    for (i = 0; i < nums.length; i++) {
        ++count[nums[i]]
    }

    for (i = 1; i < RANGE; i++) {
        count[i] += count[i - 1] 
    }

    for (i = 0; i < nums.length; i++) {
        output[count[nums[i]] - 1] = nums[i];
        count[nums[i]]--;
    }

    for (i = 0; i < output.length; i++) {
        nums[i] = output[i];
    }
    */

	// a two-pass algorithm using counting sort.
	const LEN = nums.length;
	let output = new Array(LEN);
	let i;

	for (i = 0; i < LEN; i++) {
		output[i] = nums[i];
		nums[i] = 1;
	}

	let start = 0;
	let end = LEN - 1;

	for (i = 0; i < LEN; i++) {
		if (output[i] === 0) {
			nums[start++] = 0;
		} else if (output[i] === 2) {
			nums[end--] = 2;
		}
	}
};
