// reset
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

function somarComRest (...args) { // rest operator
    return args.reduce((acumulador, itemAtual) => acumulador + itemAtual, 0); // 60
}

console.log(somarComRest(10, 20, 30)); // 60

// spread
const numeros = [1, 2, 3, 4]
console.log(...numeros); // 1 2 3 4

const timesDeFutebolDeSP = ['Palmeiras', 'São Paulo', 'Corinthians', 'Santos'];
const timesDeFutebolDoRJ = ['Flamengo', 'Fluminense', 'Vasco', 'Botafogo'];

const timesDeFutebol = timesDeFutebolDeSP.concat(...timesDeFutebolDoRJ); // altera o array original

// timesDeFutebolDeSP.concat(timesDeFutebolDoRJ); // não altera o array original

console.log(timesDeFutebol);