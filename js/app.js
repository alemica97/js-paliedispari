//chiedo all'utente di inserire una parola e la salvo in una variabile
const word = prompt('Inserisci una parola:');
console.log(word);

//scompongo la parola prendendo ogni singola lettera
const array1 = word.split('');
console.log('array 1:',array1);

const array2 = [];

let i = array1.length - 1;
console.log(i);

while(i >= 0){
    console.log(array1[i]);

    array2.push(array1[i]);

    i--;
}

console.log(array2);

if( array1 === array2){
    alert('La parola è palindroma!!')
}else{
    alert('prova con un\'altra parola')
}