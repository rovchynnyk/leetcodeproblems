/**
 * @param {number[]} A
 * @return {number[]}
 * 
 * Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
 * You may return any answer array that satisfies this condition.
 * 
 */
var sortArrayByParity = function(A) {
    const parity = [];
    for (let i = 0, len = A.length; i < len; i++) {    
        if (A[i] % 2 == 0) {
            parity.unshift(A[i]);
        } else {
            parity.push(A[i]);
        }
    }
    return parity;
};