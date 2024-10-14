function greet(person: string = "Anonoymous") {
  return `Hello ${person}`
}

const res = greet("Harshil")
console.log(res);