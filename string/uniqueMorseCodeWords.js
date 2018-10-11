/**
 * @param {string[]} words
 * @return {number}
 * 
 * International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.
 * Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.
 * Return the number of different transformations among all words we have.
 * 
 * Input: words = ["gin", "zen", "gig", "msg"]
 * Output: 2
 * Explanation: 
 * The transformation of each word is:
 * "gin" -> "--...-."
 * "zen" -> "--...-."
 * "gig" -> "--...--."
 * "msg" -> "--...--."
 * 
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
