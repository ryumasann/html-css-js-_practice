// function odd(numbers) {
//   const oddNumbers = [];
//   for (const num of numbers) {
//       if (num % 2 !== 0) {
//           oddNumbers.push(num); // 奇数の場合は配列に追加
//       }
//   }
//   return oddNumbers;
// }

// // 関数を呼び出して奇数のみの配列を取得する
// console.log(odd([1, 2, 3, 4, 5]));

const odd = numbers => numbers.filter(num => num % 2 !== 0);

// 関数を呼び出して奇数のみの配列を取得する
console.log(odd([1, 2, 3, 4, 5])); // [1, 3, 5]
