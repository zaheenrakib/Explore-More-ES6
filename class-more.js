class Product {
  constructor(name, price, brand, owner) {
    this.name = name,
      this.price = price,
      this.brand = brand,
      this.owner = owner
  }

  details() {
    console.log(`ami ${this.name} Product Details`)
  }
}

const iphone = new Product("Iphone", "2000", "Apple", "Jobs");
iphone.details();

const xiaomi = new Product("redmi", 1000, "xiaomi", "china");
console.log(xiaomi)
xiaomi.details();