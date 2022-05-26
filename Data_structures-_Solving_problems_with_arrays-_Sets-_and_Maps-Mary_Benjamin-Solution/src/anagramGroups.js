/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
    //take each words split array, arrange in alphabettical order, check if same, add same to same array inside of an array
    const similar = new Map()
    const results = []
    words.forEach((word)=> {
        const split = word.toLowerCase().split('').sort().join('')
        console.log(split)
        if(similar.has(split)) {
            similar.get(split).push(word)
        } else {
            similar.set(split,[word])
        }
    })
    console.log(similar)
    //array can also be made by Array.from(similar.values());
    for(let value of similar.values()) {
        results.push(value);
    }
    return results;
}
// result
// Map(3) {
//     'aest' => [ 'east', 'teas', 'eats' ],
//     'acrs' => [ 'cars', 'arcs' ],
//     'acer' => [ 'acre', 'race' ]
//   }
//   [ [ 'east', 'teas', 'eats' ], [ 'cars', 'arcs' ], [ 'acre', 'race' ] ]
module.exports = anagramGroups;

const words = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']
console.log(anagramGroups(words))