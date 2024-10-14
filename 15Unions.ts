let password: string | number = 6.9


type UserInfo1 = {
  first: string;
  last: string;
  age: number
}

type AccountDetails1 = {
  email: string;
  password: string;
}

let user: UserInfo1 | AccountDetails1 = {
  email: 'someone@gmail.com',
  password: 'password12'
}

const items: (number | string)[] = [1, 5, 4, 'hellowww']

console.log(items);