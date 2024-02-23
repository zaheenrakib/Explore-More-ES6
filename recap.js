/* 
* 1. var let const
* 2. default parameter
* 3. template string
* 4. arrow Function
* 5. destructuring and Spread
* 6. Objects,keys,objects.values Objects.entries
* 7. for of used in array and string
* 8. for in loop used in objects
*/

const a = 56;
const numbers = [56,7,8];
const person = {
    name:'sakib khan',
}

const meassage = `HI , ${person.name} has a:${a} access to ${numbers[2]}`

if(true){
    //BlockScope
}

const square = x => x* x;
const sum = (a,b) => a + b;