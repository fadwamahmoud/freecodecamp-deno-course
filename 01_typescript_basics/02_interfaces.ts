// Object Types
// const user = {
//   name: "Zura",
//   age: 28,
// };
// user.surname = ""; // Error

// let user: {
//   name: string;
//   age: number;
//   [key: string]: any;
// };

// user = {
//   name: "Zura",
//   age: 28,
//   surname: "",
// };

// function getId(object: { id: number }): number {
//   return object.id;
// }
// let object: { id: number };

// const user = { id: 1, name: "Zura", age: 28 };
// console.log(getId(user)); // 1

// Interfaces
interface Person {
  name: string;
  readonly age: number;
  [key: string]: any;
  hello(): string;
}
// read only in case I want to assign a prop only on initialization not directly

let user: Person = {
  name: "Zura",
  age: 28,
  surname: "",
  hello() {
    return `Hello from ${this.name}`;
  },
};
user.age = 30; // Error
