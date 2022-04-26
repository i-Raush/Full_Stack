let a = [1,2,3]

// Inserting at end
a.push(4)
console.log(a);

// Deleting from end
b = a.pop()
console.log(b);
console.log(a);

// Deleting from start
c = a.shift()
console.log(c);
console.log(a);

// Inserting at start
d = a.unshift(7)
console.log(d);
console.log(a);

// join
z = [3,1,8,7,4]
y = z.join('')
console.log(y);
console.log(z.join(' '));
console.log(z.join('*'));

// Array to String
x = z.toString()
console.log(x,typeof(x));

// for sorting
v = z.sort()
console.log(v);
console.log(z);
console.log(v == z);
console.log(v === z);

// creating empty new array, avoid using new Array function, that takes more time.
let u = []
console.log(u);
let t = new Array     
console.log(t);

console.log(12 == '12');
console.log(12 === '12');

