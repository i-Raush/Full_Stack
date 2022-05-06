// Array Destructuring
const [a,b,...c] = [1,2,3,4,5,6]
console.log(a);
console.log(b);
console.log(c);

// Object Destructuring
const {fname, lname} = {
    fname: 'Kumar Raushan',
    lname: 'Raj'
}
console.log(fname);
console.log(lname);

let j = {
    name: 'Ishika',
    class: 'CS'
}
console.log(j.name);

// Spread Operator
const d = [11,22,33]
const e = [44,55,66]
const f = [d,e]
const g = [...d, ...e]
console.log(f);
console.log(g);