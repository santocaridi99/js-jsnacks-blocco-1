//chiedo all'utente di inserire un numero che sia massimo 4 cifre
const numero = prompt('inserisci il tuo numero(max 4 cifre):');
//una variabile sum che mi servirà per fare la somma delle cifre
sum=0;
//se lunghezza delle cifre è === 4 allora 
if(numero.length===4){
    //faccio un for da 0 a numero cifre
    for(let i=0 ; i<numero.length;i++){
        //sum=sum+indice che ha controllato la lunghezza sella stringa (lo trasformiamo in intero)
    sum+=parseInt(numero[i]);
    }
    //stampo sum
    console.log(sum);
    //altrimenti warning
}else{
    console.log('attenzione non è di  4 cifre')
}