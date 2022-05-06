console.log("I m Raush");

function setPrint(params) {
    console.log("I m Developer");
}

function getData(e) {
    const data = e.target.value
    console.log(data);
}

let a = {
    name:"Raushan",
    college: "ACEIT"
}
function saveData(params) {
    localStorage.setItem('a',JSON.stringify(a) )
    sessionStorage.setItem('a',JSON.stringify(a))
}

function inData(params) {
    let c = localStorage.getItem('a')
    console.log(c);
}

function outData(params) {
    localStorage.removeItem('a')
}