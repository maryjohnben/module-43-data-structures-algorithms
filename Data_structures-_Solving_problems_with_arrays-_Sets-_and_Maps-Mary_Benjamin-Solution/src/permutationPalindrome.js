/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
//if all letters even, same, one letter, one odd letter repetition among whole bunch of even is fine, or all odd
const wordMap = new Map();
const odd = []
const even = []
    const arr = word.split('')
    console.log(arr)
    arr.forEach((letter)=>{
        // if(wordMap.has(letter)) {
            wordMap.set(letter, (wordMap.get(letter)||0)+1)
    })
    for(let repeat of wordMap.values()) {
        if(repeat % 2 === 0) {
            even.push(1)
        } else {
            odd.push(1)
        }
    }
    console.log('odd', odd, 'even', even)
    console.log(wordMap)
   if(even.length && odd.length <= 1 || odd.length <= 1) { //if there is even and then no more than 1 odd or there is just one odd and no even or there is even and no odd at all
    return true
   }
   return false;
}

module.exports = permutationPalindrome;
const word = 'aaaa';
console.log(permutationPalindrome(word))