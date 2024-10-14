type User = {
  name: string;
  age: number;
  location: string
}

const printUserInfo = (user: User) => {
  return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`
}

const res = printUserInfo({name: 'harshil', age: 20, location: 'India'})

console.log(res);
