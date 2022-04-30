// getting value by index
let c = ["abc", "xyza", "abcde"]
console.log(c[2]);

// concat function
let x = [30,40,50]
let y = [2,3,4]
let z = y.concat(x)
let a = x.concat(y)
let d = y.concat(y)
console.log(z);
console.log(a);
console.log(d);

// flat function
f = [1,2,[11,12],4]
g = f.flat()
console.log(g);

// slice
let k = [10,11,12,13]
l = k.slice(1)
n = k.slice(1,2)
o = k.slice(1,3)
p = k.slice(1,5)
console.log(l);
console.log(n);
console.log(o);
console.log(p);
// slice(x,y)---> x = starting point and y = end point for slicing
// end point has no linit--> can paas any index even if that exist or not

let m = ["car", "bike", "cycle"]
let q = m.slice(1,2)
let r = m.slice(2)
let s = ``

// every and some function
let u = ["abc", "xyze", "iopas"]
v = u.every((ele) => ele.length > 3)
w = u.some((ele) => ele.length > 3)
console.log(v);
console.log(w);

