function checkDivisibleByFive(num) {
  if (num % 5 === 0) {
    return true;
  } else {
    throw new Error("数値は5で割り切れません");
  }
}

try {
  console.log(checkDivisibleByFive(15));
} catch (e) {
  console.error(e.message);
}
