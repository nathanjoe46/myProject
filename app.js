const machine = "modo podo kodo";

const myarr = machine.split('')
// console.log(myarr)

let nbO = 0;


function checkletter(){
    for(i = 0; i < myarr.length; i++){
        if(myarr[i] === "o"){
            nbO++
        }
    }
    console.log(`Nombre de "o" : ${nbO}`)
}

checkletter()