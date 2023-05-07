// You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

// Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const products1: Product[] = [
  { id: 1, name: "asus", price: 5000, category: "laptop" },
  { id: 2, name: "samsung", price: 10000, category: "mobile" },
  { id: 3, name: "ak47", price: 60000000, category: "gun" },
  { id: 4, name: "dell", price: 7000, category: "laptop" },
];

function filterProducts<T extends keyof Product>(
  products: Product[],
  criterion: T,
  value: Product[T]
): Product[] {
  return products.filter((product) => product[criterion] === value);
}
const filteredProducts = filterProducts(products1, "price", 7000);
console.log(filteredProducts);
