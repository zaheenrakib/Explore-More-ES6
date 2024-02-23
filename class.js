const products = [
    {id: 1 , name:'lenovo',price:65000},
    {id: 2 , name:'Dell',price:55000},
    {id: 3 , name:'Hp',price:45000},
    {id: 4 , name:'Acer',price:35000},
    {id: 5 , name:'macBook',price:165000},
]

//has some properties, method
class Product {
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`);
    }
}

const lenovo = new Product('le lo Lenovo')
// console.log(lenovo);
// lenovo.speak('Ki Bolba Bolio')

class Teacher{
    constructor(name,subjects){
        this.name = name;
        this.subjects = subjects;
    }
    lecture(){
        console.log('Sir is teaching Math');
    }
}

const topon = new Teacher('Tapon Sir','Physics')
// console.log(topon);

const rasid = new Teacher('Rasid','English')
console.log(rasid);