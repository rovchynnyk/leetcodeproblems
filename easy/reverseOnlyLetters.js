/**
 * @param {string} S
 * @return {string}
 * 
 * Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.
 * 
 */
var reverseOnlyLetters = function(S) {
    const letters = [];
    const specialChars = {};
    
    for (let i = 0, len = S.length; i < len; i++) {
        const l = S[i];
        if (/[a-zA-Z]/.test(l))
            letters.push(l);
        else 
            specialChars[i] = l;
    }
    
    const reversedLetters = letters.reverse();
    
    for (let prop in specialChars) {
        reversedLetters.splice(prop, 0, specialChars[prop]);
    }
    
    return reversedLetters.join('');
};