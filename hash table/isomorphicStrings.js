/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters.
 * No two characters may map to the same character but a character may map to itself.
 *
 * Input: s = "egg", t = "add"
 * Output: true
 *
 */
const isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    let hashTable = {};
    let visitedHashTable = {};

    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in hashTable)) {
            if (visitedHashTable[t[i]]) return false;

            hashTable[s[i]] = t[i];
            visitedHashTable[t[i]] = true;
        }
        if (t[i] !== hashTable[s[i]]) return false;
    }

    return true;
};
