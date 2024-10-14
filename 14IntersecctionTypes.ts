type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type User = UserInfo & AccountDetails

const harshil: User = {
  first: 'harshil',
  last: 'web dev',
  age: 21, 
  email: 'harshilp046@gmail.com',
  password: 'harshil0'
}

console.log(harshil.first, harshil.last, harshil.age, harshil.email, harshil.password);