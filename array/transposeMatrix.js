/**
 * @param {number[][]} A
 * @return {number[][]}
 * 
 * Given a matrix A, return the transpose of A.
 * The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.
 * 
 * Input: [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[1,4,7],[2,5,8],[3,6,9]]
 * 
 */
var transpose = function(A) {
    const resultMatrix = [];
    
    for (let i = 0, len = A[0].length; i < len; i++) {
        resultMatrix[i] = [];
        
        for (let j = 0, aLen = A.length; j < aLen; j++) {
            resultMatrix[i].push(A[j][i])
        }
    }
    
    return resultMatrix;
};