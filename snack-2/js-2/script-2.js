//chiedere all'utente di inserire un numero
const number = parseInt(prompt('inserisci un numero'));
//ciclo for che va da 0 a numero inserito
for(let i =0 ; i < number;i++){
    //per indice dei numeri che arrivano fino a numero inserito si elevano alla 3 con **
    console.log(i**3);
}