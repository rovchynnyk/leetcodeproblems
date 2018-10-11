/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * 
 * Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.
 * Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.
 * 
 * Input: flowerbed = [1,0,0,0,1], n = 1
 * Output: True
 * 
 */
var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0, len = flowerbed.length; i < len; i++) {
        const prev = i - 1;
        const next = i + 1;
        if (flowerbed[i] === 0) {
            if (!flowerbed[prev] && !flowerbed[next]) {
                flowerbed[i] = 1;
                n--;
            }
        }
    }    
    return n <= 0;
};