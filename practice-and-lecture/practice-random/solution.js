// function solution(N) {
//     var enable_print = N % 10;
//     // console.log(enable_print)
//     while (N > 0) {

//       if (enable_print !== 0) {
//         process.stdout.write((N % 10).toString());
//       }
//       else if (enable_print === 0) {
//           if(N%10 !== 0) process.stdout.write((N % 10).toString());
//         // console.log('this', Number((N % 10))
//       }
//       N = Math.floor(N / 10);
//     //   console.log(N)
//     }
//   }

let N = 100
let NArr = Array.from(String(N), Number)
console.log(NArr)
  