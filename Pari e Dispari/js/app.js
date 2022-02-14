//Creo una funzione che dati un min e un max genera un numero random compreso tra essi
function randomMinMax(min, max){
    return Math.floor(Math.random() * max + min); //così ottengo un numero random che va da min a max
}
//Creo una funzione che dati due numeri, li somma e ritorna true se la somma è pari e false se è dispari
function pariDispari(num1, num2){
    let sum = num1 + num2;

    if(sum % 2 == 0){
        return true
    }else{
        return false
    }
}

let scelta = prompt('Scegli, pari o dispari? Scrivendo o la parola \'pari\' o \'dispari\'');
console.log('Hai scelto', scelta);
//controllo che l'utente abbia scritto correttamente
if( scelta == 'pari' || scelta == 'dispari' ){
    //chiedo all'utente un numero tra 1 e 5
    let userNumber = parseFloat(prompt('Inserisci un numero compreso tra 1 e 5:'));
    console.log('Il numero inserito dall\'utente è:', userNumber);
    //faccio il controllo per essere sicuro che il numero sia valido
    if( isNaN(userNumber) || userNumber > 5 ){
        alert('Errore, il numero deve essere compreso tra 1 e 5!!');
    }else{
        let risultato;
        //invoco la funzione per assegnare un numero al pc
        let pcNumber = randomMinMax(1, 5);
        console.log('Il numero random del PC è:', pcNumber);
        //invoco la funzione per saper se è pari o dispari
        let pD = pariDispari(userNumber, pcNumber);
        console.log('true = pari, false = dispari', pD);

        if(pD == true){
            risultato = 'pari';
        }else{
            risultato = 'dispari';
        }
        //controllo il vincitore controllando che la stringa inserita dall'utente sia uguale al risultato
        if(scelta == risultato){
            console.log('Complimenti, hai vinto!!');
        }else{
            console.log('Mi dispiace, ha vinto il PC');
        }
    }

    

}else{
    alert('Errore!');
}




