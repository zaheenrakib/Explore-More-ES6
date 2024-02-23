class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping Now ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}

const kodom = new Person('Kodom Ali' , 21)
console.log(kodom);
kodom.sleep();
const badam = new Person('khaca Badam', 23)
badam.sleep();

//bejal 
const lazy = kodom.sleep;
lazy();