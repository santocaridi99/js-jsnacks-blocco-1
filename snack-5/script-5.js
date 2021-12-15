//dichiaro array vuoto
const numeri = [];
//variabile somma a 0
let sum=0;
//variabile numero che inizialmente non definita
let numero;
do{
    //parseInt in  modo tale da avere un intero
    numero = parseInt(prompt('inserisci numero'));
    //push  nell'array numeri il numero
    numeri.push(numero);
    //fare la somma dei numeri
    sum+=numero;
    console.log(sum);
}while(sum<50)
if(sum>=50){
    console.log('Attenzione numero maggiore o uguale a 50')
}
//stampare la somma che si fermerà fino a quando un numero non supererà 50
