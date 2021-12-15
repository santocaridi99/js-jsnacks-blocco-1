//chiedere all'utente di inserire un numero
const number = parseInt(prompt('inserisci un numero'));
//ciclo for che va da 0 a numero inserito
for(let i =0 ; i < number;i++){
    //stampo il cubo (con**)dell'indice che dipenderà da number(numero inserito)
    console.log(i**3);
}