console.log("Hello World");

// This function takes an array of numbers and returns the sum of their squares
function sumOfSquares(numbers) {
  // Use the reduce method to calculate the sum of the squares
  const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue ** 2;
  }, 0);
  
  return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const result = sumOfSquares(numbers);
console.log(result); // Output: 55
