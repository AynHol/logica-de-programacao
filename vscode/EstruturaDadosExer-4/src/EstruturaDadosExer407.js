var pai = [];
var mae = [];
var filho = [];

for(var i = 0; i < 50; i++){
    pai[i] = parseInt(Math.random() * 50);
    mae[i] = parseInt(Math.random() * 50);
}

// var pai2 = pai.filter(number => number % 2 == 0);
// var mae2 = mae.filter(number => number % 2 !== 0);
// var l = pai2.length + mae2.length

// for(var j = 0; j < l; j++){
//     filho.push(pai2[j])
//     filho.push(mae2[j])
// }

// for(var i = 0; i < pai.length; i++){
//     if(pai % 2 == 0){
//         filho.push(pai[i]);
//     } if(mae % 2 !== 0){
//         filho.push(mae[i]);
//     }
// }

console.log(pai)
console.log(mae)
console.log(filho)