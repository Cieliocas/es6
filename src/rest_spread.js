function somar(a, b) {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
    // console.log(arguments);
    // return a + b + c;
}

console.log(somar(10, 20, 30)); // 3