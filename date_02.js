var data
var l
function getData(e) {
    data = e.target.value
    return data;
}

function saveData(params) {
    localStorage.setItem('user',data)
    console.log(data);
    l = data.length
    console.log(l);

    if (data) {
        if (data.every((val) => val = ' ')) {     // condition for checking whitespaces 
            console.log("No valid input");
        } else {
            console.log(`His name is ${data}`);
        }
    } else {
        console.log("No user found");
    }
}

