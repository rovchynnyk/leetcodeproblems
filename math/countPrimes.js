/**
 *
 * @param {*} n
 *
 * Count the number of prime numbers less than a non-negative number, n.
 *
 * Input: 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 *
 */
const countPrimes = function(n) {
    let sieve = new Array(n).fill(true);

    for (let i = 2; i < Math.sqrt(n); i++) {
        if (sieve[i]) {
            for (let j = i ** 2; j < n; j += i) {
                sieve[j] = false;
            }
        }
    }

    const sum = sieve.reduce((acc, curr, i) => {
        if (curr && i > 1) acc += 1;
        return acc;
    }, 0);

    return sum;
};

countPrimes(499979);
