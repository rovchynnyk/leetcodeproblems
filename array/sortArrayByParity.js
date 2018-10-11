/**
 * @param {number[]} A
 * @return {number[]}
 * 
 * Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
 * You may return any answer array that satisfies this condition.
 * 
 * Input: [3,1,2,4]
 * Output: [2,4,3,1]
 * 
 */
var sortArrayByParity = function(A) {
    const parity = [];
    for (let i = 0, len = A.length; i < len; i++) {    
        const el = A[i];
        if (el % 2 == 0) {
            parity.unshift(el);
        } else {
            parity.push(el);
        }
    }
    return parity;
};