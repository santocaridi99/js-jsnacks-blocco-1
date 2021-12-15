//dichiaro una variabile somma a 0 che mi servirà per avere la somma dei numeri
let sum = 0;
let number;
//ciclo for da 0  a 10, dove dentro avrò il prompt che chiederà di inserire un numero
for(let i = 0 ; i < 10 ;i++){
    //sum=sum+numeroinserito così per 10 volte 
    number=parseInt(prompt('inserisci un numero'));
    sum+=number;
    console.log(number);
}
//stampo
console.log(sum);

