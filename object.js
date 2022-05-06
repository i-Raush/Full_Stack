let a = {
    name: "Raushan",
    age:21
}

let b = JSON.stringify(a)
console.log(b);

let c = JSON.parse(b)
console.log(c);
console.log(c.name);