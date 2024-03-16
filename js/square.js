// function square(numbers) {
//     const squaredArray = [];
//     for (const num of numbers) {
//         squaredArray.push(num * num); // 各要素を2乗して配列に追加
//     }
//     return squaredArray;
// }

// // 関数を呼び出して各要素を2乗した配列を取得する
// console.log(square([1, 2, 3, 4, 5]));

const square = numbers => numbers.map(num => num * num);

// 関数を呼び出して各要素を2乗した配列を取得する
console.log(square([1, 2, 3, 4, 5]));