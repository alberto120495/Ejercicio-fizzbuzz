function fizzbuzz(number) {
  const divisible = (number, divisor) => {
    return number % divisor == 0;
  };

  if (number == 0) return 0;

  if (divisible(number, 3) && divisible(number, 5)) {
    return "fizzbuzz";
  }
  if (divisible(number, 3)) {
    return "fizz";
  }
  if (divisible(number, 5)) {
    return "buzz";
  }

  return number;
}

function print(number) {
  for (let index = 0; index <= number; index++) {
    console.log(`Numero ${index}: ${fizzbuzz(index)}`);
  }
}

print(16);

module.exports = fizzbuzz;
