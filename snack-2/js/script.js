//- Il software deve chiedere per 5 volte all’utente di inserire un numero.
//  Il programma stampa la somma di tutti i numeri inseriti.

let userSum = 0;
for(let i = 0; i < 5; i++){
    userSum += parseInt(prompt('inserisci un numero'));
    console.log(userSum);
}