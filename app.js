let input = document.querySelector('#input')
let head_1 = document.querySelector('#head_1')

// var give_table = +prompt("Enter Number");


function result() {
    
    
    for(let i = 1; i <= input.value; i++){
        head_1.innerHTML += (`Table of ${i}<br />`);
    
        for(let j = 1; j <= 10; j++){
            head_1.innerHTML += (`${i} X ${j} = ${i * j} <br />`)
        }
    }

}


