//chiedo all'utente di inserire una parola e la salvo in una variabile
const word = prompt('Inserisci una parola:');
console.log(word);

//Creo una funzione che prende la parola inserita dall'utente e la inverte
function reverseWord(wordToReverse){
    //scompongo la parola prendendo ogni singola lettera
    const array1 = wordToReverse.split('');
    console.log('Array 1:',array1);
    //dichiaro un array vuoto che verrà riempito dai componenti del primo array invertito
    const array2 = [];
    //dichiaro un contatore = all'ultimo indice dell'arrey così da poterlo scorrere al contrario
    let i = array1.length - 1;
    console.log(i);

    while(i >= 0){
        
        console.log(array1[i]);
        //pusho gli elementi del primo array nel secondo, partendo dalla fine
        array2.push(array1[i]);

        i--;
    }

    console.log('Array 2:',array2);

    //La funzione dara come risultato la parola invertita
    return array2.join('');
}

let reverse = reverseWord(word); //salvo in reverse, la parola inserita dall'utente invertita

if( word == reverse){
    console.log(`La parola ${word} è palindroma!!`);
}else{
    alert('prova con un\'altra parola');
}