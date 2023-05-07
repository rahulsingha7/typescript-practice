// Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

type ProductTuple<T1, T2, T3> = [T1, T2, T3];

type ProductsArray<T1, T2, T3> = ProductTuple<T1, T2, T3>[];

const costCalculation = <T1, T2 extends number, T3 extends number>(
  products: ProductsArray<T1, T2, T3>
): number => {
  let total = 0;
  for (const product of products) {
    const [, price, quantity] = product;
    total += price * quantity;
  }
  return total;
};

const products: ProductsArray<string, number, number> = [
  ["Product A", 10, 2],
  ["Product B", 5, 3],
  ["Product C", 8, 1],
];
const totalCost = costCalculation(products);
console.log("Total cost:", totalCost);
