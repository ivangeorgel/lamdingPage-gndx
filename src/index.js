function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}; //No necesariamente se debe llamar callback

console.log(calc(2, 2, sum)); //sum debe estar sin () y sin argumentos
//


