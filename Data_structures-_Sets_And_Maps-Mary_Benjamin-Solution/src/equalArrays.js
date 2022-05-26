/**
 * return true if two arrays are equal, false otherwise
 */
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
  original.set(num, (original.get(num) || 0)+1) //here original.get will return value of num which will be 0 if none exist else it will be 1 or 2 so we basically adding 1 to it. just acts like count++
}
console.log(original)
for(let num of mapa2.values()) {
    original2.set(num, (original2.get(num) || 0)+1) //here original.get will return value of num which will be 0 if none exist else it will be 1 or 2 so we basically adding 1 to it. just acts like count++
}
console.log(original2)

for(let [key,values] of original) {
   if(original2.get(key) !== values) { //calling key pulls the value of original2 thus comparing values of both
       console.log(key, values)
       return false; //if value not mathcing false
   } 
}
return true; //if all conditions met return true;
}

module.exports = isEqual;
