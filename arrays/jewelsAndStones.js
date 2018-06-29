/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J, S) {
    let count = 0;
    for (let i = 0; i < S.length; i++) {
        let stone = S[i];
        if (~J.indexOf(stone)) {
            count++;
        }
    }
    
    return count;
};