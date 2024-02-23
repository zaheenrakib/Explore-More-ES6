// data access
const data = [{id :1,name:'abul', address:'Bandorbon'}];

console.log(data[0].address);

const products = {
    count :5000,
    data : [
        {id:1,name:'Lenovo Laptop',price:6500},
        {id:2,name:'Macbook',price:16500}
    ]
}
//second products price
console.log(products.data[1].price);

const user = {
    id:5001,
    name:'Shoriful Raj',
    address:{
        street:{
            first:'54/ uttora',
            second:'poribag',
            third:'no dorai'
        },
        city:'Dhaka'
    }
}

const user2 = {
    id:5002,
    name:'pori bibir majar',
    address: {
        city:'chittagong',
        country:'Bangladesh'
    }
}
console.log(user.address.street?.second);
console.log(user2.address.street?.second);