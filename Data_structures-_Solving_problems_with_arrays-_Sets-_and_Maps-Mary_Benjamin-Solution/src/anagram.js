/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
    //make array split array arrange in alphabet check if both same
    let s1Arr = s1.toLowerCase().split('').sort().join('')
    let s2Arr = s2.toLowerCase().split('').sort().join('')
    if(s1Arr === s2Arr) return true
    // console.log(s1Arr)
    return false;
}

module.exports = anagram;
const s1 = 'hello';
const s2 = 'hello';
console.log(anagram(s1,s2))
