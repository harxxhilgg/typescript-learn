// const person: { firstName: string; lastName: string; age: number } = {
//   firstName: "Harshil",
//   lastName: "Patel",
//   age: 21,
// };

// console.log(
//   `First Name: ${person.firstName}\nLast Name: ${person.lastName}\nAge: ${person.age}`
// );

function printUser(): { firstName: string; lastName: string; age: number } {
  return {
    firstName: "Hashil",
    lastName: "Patel",
    age: 21,
  };
}

const res = printUser();
console.log(res);