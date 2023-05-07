// Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.

const numbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const minMax = (numbers: number[]): [number, number] => {
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return [max, min];
};

const [maxValue, minValue] = minMax([ ...numbersArray ]);

console.log("Max value is: ",maxValue);
console.log("Min value is: ",minValue)
