function somar(a, b) {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) { // ele não é uma array, mas se comporta como
        soma += arguments[i]; // arguments é um objeto array
    }
    // arguments é iterável e pode ser convertido para array

    return soma; // 60
    // arguments.map
    // console.log(arguments);
    // return a + b + c;
}

console.log(somar(10, 20, 30)); // 3