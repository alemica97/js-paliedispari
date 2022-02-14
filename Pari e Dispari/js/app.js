//Creo una funzione che dati un min e un max genera un numero random compreso tra essi
function randomMinMax(min, max){
    return Math.floor(Math.random() * max + min); //così ottengo un numero random che va da min a max
}

// let pcNumber = randomMinMax(1, 6);
// console.log(pcNumber);

function pariDispari(num1, num2){
    let sum = num1 + num2;

    if(sum % 2 == 0){
        return true
    }else{
        return false
    }
}

// let a = 4;
// let b = 6;
// console.log(a,b);

// let pD = pariDispari(a, b);
// if(pD == true){
//     console.log('La somma è pari');
// }else{
//     console.log('è dispari');
// }
let userNumber;

let scelta = prompt('Scegli, pari o dispari? Scrivendo o la parola \'pari\' o \'dispari\'');
console.log(scelta);

if(scelta == 'pari' || scelta == 'dispari'){
    userNumber = parseFloat(prompt('Inserisci un numero:'));
    console.log('Il numero inserito dall\'utente è:', userNumber);
}else{
    alert('Errore!');
}




