//dichiaro una variabile indice che imposto a 0 voglio che le potenze
//vanno da 0 fino a che risultatò sia <= di 1000
let index=0;
//una variabile ancora che mi serve per fare la potenza
let a=0;
//uso do while
//do
//codice da eseguire
//indice che si incrementa
//while che è la condizione ovvero fino a quando a<1000
do{
    console.log('la potenza è:',a)
    a=2**index;
    index++;
}while(a<1000)