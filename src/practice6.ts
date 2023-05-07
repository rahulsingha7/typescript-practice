// Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

interface Person {
  name: string;
  age: number;
  email: string;
}

const persons: Person[] = [
  { name: "rahul", age: 23, email: "rahul@gmail.com" },
  { name: "raj", age: 23, email: "raj@gmail.com" },
  { name: "neela", age: 22, email: "neela@gmail.com" },
];

function emailCheck(persons: Person[], email: string): Person | null {
  for (const person of persons) {
    if (person.email == email) {
      return person;
    }
  }
  return null;
}

const emailToFind = "rahul@gmail.com";
const person = emailCheck(persons, emailToFind);

if (person !== null) {
  console.log(person);
} else {
  console.log("no person found");
}
