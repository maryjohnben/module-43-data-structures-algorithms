/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word) {
    //add letters to map return first with only 1 added otherwise return
    const result = new Map();
    const arr = word.split('');
    arr.forEach((letter)=> {
        result.set(letter, (result.get(letter) || 0)+1)
    })
    console.log(result)
    for(let [key,value] of result.entries()) {
        if(value === 1) return key;
    }
    return null;
}


module.exports = firstSingleCharacter;
const word = 'tthhiinnkkffuull';
console.log(firstSingleCharacter(word))
