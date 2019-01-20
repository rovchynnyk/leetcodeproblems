/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
	if (x === 0) return true;
	if (x < 0 || x % 10 === 0) return false;

	let _x = x;
	let copy = 0;

	while (x > 0) {
		copy = copy * 10 + (x % 10);
		x = parseInt(x / 10, 10);
	}

	return _x === copy;
};

console.log(isPalindrome(-121));
