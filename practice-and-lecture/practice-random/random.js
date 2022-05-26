// function union(s1, s2) {
//     const mergedArr = [...s1, ...s2]
//     // console.log(mergedArr)
//     const mergedSet = new Set(mergedArr);
//     return mergedSet
//   }
// const oneArr = [1,2,3,4]
//   const s1 = new Set(oneArr);
  
//   const twoArr = [5,6,7,8]
//   const s2 = new Set(twoArr)
// //   console.log(s2)

// console.log(union(s1,s2))
  
// function intersect(s1, s2) {
//   let common = new Set()
//   for(let num of s1.values()) {
//       if(s2.has(num)) common.add(num);
//   }
//   return common;
// }

// const oneArr = [1,2,3,4]
//   const s1 = new Set(oneArr);
  
//   const twoArr = [4,2,7,8]
//   const s2 = new Set(twoArr)
//   console.log(intersect(s1,s2))

// function difference(s1, s2) {
//     const uniqueTos1 = new Set()
//     for(let num of s1.values()) {
//         if(!s2.has(num)) uniqueTos1.add(num)
//     }
//     return uniqueTos1
// }

// const oneArr = [1,2,3,4]
//   const s1 = new Set(oneArr);
  
//   const twoArr = [3,4,7,8]
//   const s2 = new Set(twoArr)
//   console.log(difference(s1,s2))

/*
function isEqual(a1,a2) {
const mapa1 = new Map()
const mapa2 = new Map()
const original = new Map()
const original2 = new Map()
if(a1.length !== a2.length) return false; 

for(let i = 0; i < a1.length; i++) {
    mapa1.set(i, a1[i])
}
for(let i = 0; i < a2.length; i++) {
    mapa2.set(i, a2[i])
}
// console.log(mapa1)
// console.log(mapa2)


for(let num of mapa1.values()) {
  original.set(num, (original.get(num) || 0)+1) //here original.get will return value of num which will be 0 if none exist else it will be 1,2 or higher so we basically adding 1 to it each time. just acts like count++
}
console.log(original)
for(let num of mapa2.values()) {
    original2.set(num, (original2.get(num) || 0)+1) //here original2.get will return value of num which will be 0 if none exist else it will be 1,2 or higher so we basically adding 1 to it each time. just acts like count++
}
console.log(original2)

for(let [key,values] of original) {
   if(original2.get(key) !== values) { //calling key pulls the value of original2 thus comparing values of both original and original2
       console.log(key, values)
       return false; //if value not mathcing false
   } 
}
return true; //if all conditions met return true;
}


const a1 = [12,1,222]
const a2 = [1,222,12]
console.log(isEqual(a1,a2))
*/

// const days = [
//     [0, "Sunday"],
//     [1, "Monday"],
//     [2, "Tuesday"],
//     [3, "Wednesday"],
//     [4, "Thursday"],
//     [5, "Friday"],
//     [6, "Saturday"],
//   ];
  
//   const dayMap = new Map(days);
//   console.log(dayMap)