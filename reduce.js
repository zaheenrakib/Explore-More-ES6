const number = [4,5,6,7,2,66];
const total = number.reduce((previous,current) => previous + current,0)
console.log(total);

const sum = number.reduce((p,c) => p+c,0)
console.log(sum);