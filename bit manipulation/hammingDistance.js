/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 * 
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 * Given two integers x and y, calculate the Hamming distance.
 * 
 * Input: x = 1, y = 4
 * Output: 2
 * 
 */
var hammingDistance = function(x, y) {
    const leadingZeros = n => {
      n = n.toString(2);
      while(n.length < 32) {
        n = `0${n}`
      }
      return n;
    }
  
    const xBit = leadingZeros(x);
    const yBit = leadingZeros(y);
    let hammingDistance = 0;  
    for (let i = 0, len = xBit.length; i < len; i++) {
      if (xBit[i].charAt(0) !== yBit[i].charAt(0)) 
          hammingDistance += 1;
    }
    
    return hammingDistance;
};