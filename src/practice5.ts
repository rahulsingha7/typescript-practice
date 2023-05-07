// Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?

type genericTuple1<T> = Array<T>;

const array3: genericTuple1<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getEven = (arr: number[]): number => {
  let even: number = 0;
  for (const num of arr) {
    if (num % 2 == 0) {
      even = even + num;
    }
  }
  return even;
};

const evenNumber = getEven(array3);
console.log(evenNumber);
