//- Calcola la somma e la media dei primi 10 numeri.
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numberArray)
let sumNotGpt = 0;
for(let i = 0; i < numberArray.length; i++){
    sumNotGpt += numberArray[i];
    console.log(sumNotGpt);


}
let avarage = sumNotGpt / numberArray.length;
console.log(avarage)
