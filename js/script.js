//- Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati 
//(inserire il numero nell'array solo se non è già presente).

const numberArray = [15, 10, 19, 21, 22, 13];

for(let i = 0; i < 5; i++){
    let userNumber = parseInt(prompt('inscerisci un numero'));
    if (!numberArray.includes(userNumber)){
        numberArray.push(userNumber)
        console.log(numberArray)
    }

}