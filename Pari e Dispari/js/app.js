//Creo una funzione che dati un min e un max genera un numero random compreso tra essi
function randomMinMax(min, max){
    return Math.floor(Math.random() * max + min); //così ottengo un numero random che va da min a max
}

let num = randomMinMax(1, 6);
console.log(num);