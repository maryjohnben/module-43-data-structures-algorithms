// arrays
// const myArr = [15, 12, 8, 6];

// console.log("before splice: ", myArr);
// myArr.splice(1, 2, 32); // mutates array directly
// console.log(myArr);

// push, pop, slice, indexing
// O(1)

// insertion (.splice), forEach, map, filter, reduce, find, indexOf, unshift
// O(n)

// sorting
// O(nlogn)

// Sets
// special kind of data structure that only stores unique values

const myArr = ["Alice", "Carol", "Alice", "Carol", "Alice", "Carol", "Dennis"];

const mySet = new Set(myArr);
mySet.add("Alice");
mySet.add("Dennis");
mySet.add("Bob");

// console.log(mySet.has("Alice")); // true
// console.log(mySet.has("Dave")); // false

// console.log(mySet);

// add, has, delete - constant O(1)

// convert a set back into an array
// const newArr = [...mySet]; // Array.from(mySet)
// console.log(newArr);

// O(n)
// mySet.forEach((item) => console.log(item));

// const mySet = new Set()

// Map
const myMap = new Map();
// adding to the map object

myMap.set("Alice", { age: 21, region: "Europe" });
myMap.set("Bob", { age: 25, region: "USA" });
myMap.set("Bob", { age: 30, region: "USA" });

// console.log(myMap.get("Bob"));

// get, set - O(1)

const days = [
  [0, "Sunday"],
  [1, "Monday"],
  [2, "Tuesday"],
  [3, "Wednesday"],
  [4, "Thursday"],
  [5, "Friday"],
  [6, "Saturday"],
];

const dayMap = new Map(days);

// console.log(dayMap);
// console.log(dayMap.get(0));

console.log(dayMap.size);