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
const numeros = [1, 2, 3, 4] // array
console.log(...numeros); // spread operator

const timesDeFutebolDeSP = ['Palmeiras', 'São Paulo', 'Corinthians', 'Santos'];
const timesDeFutebolDoRJ = ['Flamengo', 'Fluminense', 'Vasco', 'Botafogo'];

// const timesDeFutebol = timesDeFutebolDeSP.concat(...timesDeFutebolDoRJ); // altera o array original
const timesDeFutebol = [...timesDeFutebolDeSP, ...timesDeFutebolDoRJ]; // não altera o array original
// junta os dois arrays em um novo array através do spread operator

// timesDeFutebolDeSP.concat(timesDeFutebolDoRJ); // não altera o array original

console.log(timesDeFutebol);

const carroDaJulia = {
    marca: 'vw',
    modelo: 'Gol',
    motor: 1.6
}

const carroDaAna = { // spread operator copia as propriedades de um objeto para outro
    ...carroDaJulia,
    motor: 1.8,
}

console.log(carroDaAna);

// desestruturação

// const motorDOCarroDaAna = carroDaAna.motor; // sem desestruturação
const { motor: motorDoCarroDaAna } = carroDaAna; // com desestruturação
const { motor: motorDoCarroDaJulia } = carroDaJulia; // com desestruturação

console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia);

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol; // desestruturação de array

console.log(item1);  // Palmeiras
console.log(item2);  // São Paulo
console.log(item3);  // Corinthians

console.log(outrosTimes); // ['Santos', 'Flamengo', 'Fluminense', 'Vasco', 'Botafogo']



