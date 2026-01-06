class Person{
    #status
    constructor(name,age , status){
        this.name = name;
        this.age = age;
        this.#status = status;
    }
    sleep(){
        console.log(`Sleeping Now ${this.name}`);
    }
    activity(){
        this.sleep();
    }
    action() {
        console.log(this.#status);
    }
}

const solimUnddin = new Person("solim", 12, "single");
solimUnddin.action();

// const kodom = new Person('Kodom Ali' , 21)
// console.log(kodom);
// kodom.sleep();
// const badam = new Person('khaca Badam', 23)
// badam.sleep();

// //bejal 
// const lazy = kodom.sleep;
// lazy();