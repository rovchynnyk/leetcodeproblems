/**
 * @param {*} str 
 * 
 * Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
 * 
 */
const toLowerCase = str => {
    return [].map.call(str, letter => {
        const isUppercase = letter.charCodeAt(0) <= 90;
        if (letter.charCodeAt(0) < 65) 
            return letter;
        if (isUppercase) 
            letter = String.fromCharCode(letter.charCodeAt(0) + 32);
        return letter;
    }).join('');
};
