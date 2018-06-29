/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function(words) {
    const morseArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const letters = [...Array(26)].map((val, i) => 
        String.fromCharCode(i + 65).toLowerCase()
    );
    const morseObj = letters.reduce((acc, letter, i) => {
        acc[letter] = morseArr[i];
        return acc;
    }, {});

    let transformationSet = new Set();

    words.map(word => 
        transformationSet.add(word.split('').map(l => morseObj[l]).join(''))
    );

    return transformationSet.size;
};
