/**
 * @param {number[][]} A
 * @return {number[][]}
 * 
 * Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.
 * To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].
 * To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].
 *
 * Input: [[1,1,0],[1,0,1],[0,0,0]]
 * Output: [[1,0,0],[0,1,0],[1,1,1]]
 * 
 */
var flipAndInvertImage = function(A) {
    const resultImage = [];
    for (let i = 0, len = A.length; i < len; i++) {
        const el = A[i].reverse();
        const inversedArr = [];
        for (let j = 0, elLen = el.length; j < elLen; j++) {
            inversedArr[j] = el[j] === 0 ? 1 : 0;
        }        
        resultImage.push(inversedArr);
    }
    return resultImage;
};