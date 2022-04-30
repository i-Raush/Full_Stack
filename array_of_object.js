let a = "Hi Im Developer aa"
let b = a.split(" ")
let c = b.slice(0,2).join(" & ")
console.log(c);

d = a.split(" ").filter((val) => val.length === 2).join(" & ")
console.log((d));

let e = [
    {
        name: "RR",
        age: 60
    },
    {
        name: "BCD",
        age: 1
    },
    {
        name: "ZZZZ",
        age: 10
    }
]
let f = e.filter((ele) => ele.age > 10)
let g = e.filter((ele) => ele.name.length < 4)
console.log(f);
console.log(g);