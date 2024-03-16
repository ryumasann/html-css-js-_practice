// function hasOdd(numbers) {
//   for (const num of numbers) {
//       if (num % 2 !== 0) {
//           return true; // 奇数が見つかった場合はtrueを返す
//       }
//   }
//   return false; // 配列を調べても奇数が見つからなかった場合はfalseを返す
// }

// // 関数を呼び出して奇数が含まれるかどうかを確認する
// console.log(hasOdd([1, 2, 3, 4, 5])); // true

const hasOdd = array => array.some(num => num % 2 !== 0);

// 関数を使って奇数が含まれるかどうかを確認する
console.log(hasOdd([1, 2, 3, 4, 5]));