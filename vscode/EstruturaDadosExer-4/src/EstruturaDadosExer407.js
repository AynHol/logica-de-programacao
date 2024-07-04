var pai = [];
var mae = [];
var filho = [];

for(var i = 0; i < 50; i++){
    pai[i] = parseInt(Math.random() * 100);
    mae[i] = parseInt(Math.random() * 100);
}

for(var i = 0; i < 50; i++){
    if(i % 2 == 0){
        filho[i] = pai[i];
    } else {
        filho[i] = mae[i];
    }
}

console.log(pai)
console.log(mae)
console.log(filho)