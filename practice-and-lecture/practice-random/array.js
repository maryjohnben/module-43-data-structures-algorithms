// function missingNumberBruteForce(numbers) {
//     let newArr = numbers.sort((a,b)=>a-b)
//     console.log(`sorted:${newArr}`)
//     let beginning = 1
//     console.log(newArr)
//     for(let i = 0; i <= newArr.length; i++) {
//         let number = newArr[i]
//           console.log(`number: ${number}`)
//           console.log(`begi: ${beginning}`)
//       if(beginning === number) {
//           beginning+=1;
//       } else {
//           return beginning;
//       }
//     }
    
//   }

function missingNumberSum(numbers) {
    const expectedLength = numbers.length + 1
    let expectedSum = (expectedLength*(expectedLength + 1))/2//n(n+1)/2
    console.log(expectedSum)
    let actualSum = 0;
    let difference = 0;
    for(let i =0; i < numbers.length; i++) {
      actualSum += numbers[i] 
      console.log(actualSum)
      difference = expectedSum - actualSum
    }
    return difference;
  }
// function minimumAndMaximumSort(numbers) {
//   const maxMin = [];
//   const newArr = numbers.sort()
//   if(newArr.length) {
//     if(newArr[0] > 0) {
//       maxMin.push(newArr[0])
//       maxMin.push(newArr[numbers.length -1])
//     } else {
//       maxMin.push(newArr[numbers.length -1])
//       maxMin.push(newArr[0])
//     }
//   }
//   return maxMin;
// }
function minimumAndMaximumIterate(numbers) {
  let smallest = Infinity;
  let largest = -Infinity;
  const arr = []
  //iterate
  //if number greater than previous store to largest
  //if nummber less than previous store to smallest
  for(let i =0; i< numbers.length; i++) {
    let number = numbers[i];
    if(number < smallest) smallest = number;
    if(number > largest) largest = number;
  }
  console.log(largest)
  if(smallest !== Infinity) {
    arr.push(smallest)
  arr.push(largest)
  }
  // return [smallest, largest]; //this should do fine but need empty array when array is empty
  return arr;
}
const numbers = [1,2,4,6]
  console.log(minimumAndMaximumIterate(numbers))