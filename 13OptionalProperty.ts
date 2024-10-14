type user = {
  name: string;
  age?: number;
  readonly location: string
}

const user : user = {
  name: 'harshil',
  // age: 21,
  location: 'india'
}

console.log(`Name: ${user.name}\nAge: ${user.age}\nLocation: ${user.location}`);