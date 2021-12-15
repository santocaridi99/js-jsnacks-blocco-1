//dichiaro una variabile somma a 0 che mi servirà per avere la somma dei numeri
let sum = 0;
//ciclo for da 0  a 10 dove dentro avrò il prompt che chiederà di inserire un numero
for(let i = 0 ; i < 10 ;i++){
    //sum=sum+numeroinserito così per 10 volte 
    sum+= parseInt(prompt('inserisci un numero'));
}
//stampo
console.log(sum);

