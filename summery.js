const person = {
  name: "Rakib",
  age: 22,
  1: 100,
  father: {
    name: "Halim",
    age: 62,
  }
}

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// console.log(person.name);

// console.log(person["name"]);
// console.log(person[1]);

// console.log(person?.mother?.name);//optinal chaing

// const numbers = [1, 2, 3, 4, 5, 56];

// const newNumbers = numbers.map(num => {
//   return num = num;
// })

// console.log(newNumbers);

const products = [
  { id: 1, name: 'lenovo', color:'red', price: 65000 },
  { id: 2, name: 'Dell', color:'black', price: 55000 },
  { id: 3, name: 'Hp', color:'red', price: 45000 },
  { id: 4, name: 'Acer', color:'gold', price: 35000 },
  { id: 5, name: 'macBook', color:'red', price: 165000 },
]


//find for single item 
// const singlePoduct = products.find(p => p.color === "red");
// console.log(singlePoduct);

// filter return new array
// const newProduct = products.filter(p => p.color === "red");

// console.log(newProduct);


// //need no return use forEach
// products.forEach(p => {
//   if (p.color === "red") {
//     console.log(p)
//   }
// })


class Person {
  constructor(name, age) {
      this.age = age,
      this.name = name
  }
}

class Hena extends Person {
  constructor(name, age, status) {
    super(name, age)
  }
}

// const hena = new Person("hena", 21);
// console.log(hena)