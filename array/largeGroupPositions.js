/**
 * @param {string} S
 * @return {number[][]}
 * 
 * In a string S of lowercase letters, these letters form consecutive groups of the same character.
 * For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".
 * Call a group large if it has 3 or more characters.  We would like the starting and ending positions of every large group.
 * The final answer should be in lexicographic order.
 * 
 */
var largeGroupPositions = function(S) {
    const groups = [];
    
    for (let i = 0, len = S.length; i < len; i++) {
        let group = [ i ];
        let counter = 1;        
        let j = i + 1;
        
        while(S[i] === S[j]) {            
            counter += 1;     
            j++
        }
        i = j - 1;
        
        if (counter >= 3) {
            group.push(i); 
            groups.push(group);
        }    
    }        
    
    return groups;
};