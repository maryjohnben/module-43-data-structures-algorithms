///////////SET///////////////////
const studentGrades = ["B", "F", "A", "A", "D", "B", "A", "F"];
const uniqueGrades = new Set(studentGrades); // Duplicates will be removed

for (let grade of uniqueGrades.values()) {
  console.log(grade); // 'B', 'F', 'A', 'D'
}

const distinctGrades = [...uniqueGrades]; // Array contains ['B', 'F', 'A', 'D']
console.log(distinctGrades)
/////////////MAPS////////////////
const months = new Map() 
months.set(0, "January");
months.set(1, "February");
months.set(2, "March");
months.set(3, "April");
months.set(4, "May");
months.set(5, "June");
months.set(6, "July");
months.set(7, "August");
months.set(8, "September");
months.set(9, "October");
months.set(10, "November");
months.set(11, "December");

for (let [key, value] of months.entries()) {
    console.log(`Print ${key + 1} : ${value}`); // print 1: January etc
  }

  months.forEach((value, key) => console.log(`${key + 1} : ${value}`)); // print 1: January etc

  const days = [
    [0, "Sunday"],
    [1, "Monday"],
    [2, "Tuesday"],
    [3, "Wednesday"],
    [4, "Thursday"],
    [5, "Friday"],
    [6, "Saturday"],
  ];

  const dayMap = new Map(days)
  console.log(dayMap)
  //efficiency of map
//   set()
// O(1)
// delete()
// O(1)
// get()
// O(1)
// has()
// O(1)