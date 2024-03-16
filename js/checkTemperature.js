function checkTemperature(t) {
  if (t > 50 && t < -50) {
    console.log("Invalid temperature");
  } else if (t < 15) {
    console.log("Cold");
  } else if (t < 30) {
    console.log("Warm");
  } else if (t >= 30) {
    console.log("Hot");
  }
}

// 関数を呼び出して温度をチェックし、メッセージを出力する
checkTemperature(30); // "Hot"
checkTemperature(20); // "Warm"
checkTemperature(10); // "Cold"
checkTemperature(100); // "Invalid temperature"
checkTemperature(-60); // "Invalid temperature"
