/**
 * return the union of two sets
 */
function union(s1, s2) {
    const mergedArr = [...s1, ...s2] //merging both sets, new arr will look like [1,2,3,4,5,6]
    // console.log(mergedArr)
    const mergedSet = new Set(mergedArr); //creating back set from merged arr
    return mergedSet
  }

/**
 * return the intersection of two sets
 */
function intersect(s1, s2) {
  let common = new Set() //common of both is added using .add
  for(let num of s1.values()) { //looped through s1 values
      if(s2.has(num)) common.add(num); //if s2 also has then common added
  }
  return common;
}

/**
 * return the difference of two sets
 */
function difference(s1, s2) {
    const uniqueTos1 = new Set()
    for(let num of s1.values()) { 
        if(!s2.has(num)) uniqueTos1.add(num) //if num from s1 is not present in s2 then added to unique
    }
    return uniqueTos1
}

module.exports = { union, intersect, difference };
