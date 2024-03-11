//- Crea un array vuoto.
//  Chiedi per 6 volte all’utente di inserire un numero,
//  se è dispari inseriscilo nell’array.
const emptyArray = [];
for(let i = 0; i < 6; i++){
    let userNumber = parseInt(prompt('inserisci numero preferibilmente dispari perchè se no lo scarto'))
    if(userNumber % 2 !== 0){
        emptyArray.push(userNumber);
    }
}
console.log(emptyArray);