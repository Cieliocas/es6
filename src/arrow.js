
// Arrow function reduzida
const minhaFuncao = () => "Hello World";

// Arrow function com um parâmetro
const retornaUmCarro = () => ({
    marca: "Fiat",
    modelo: "Uno",
    ano: 2020
});

console.log(minhaFuncao());
console.log(retornaUmCarro());

const carro = {
    velocidadeAtual: 40,
    acelerar: function() { // Função normal tem acesso ao this
        console.log(this); // this é o objeto carro
        this.velocidadeAtual += 10;
    },
    desacelerar: () => { // Arrow function não tem acesso ao this
        console.log(this); // this é o objeto global
        this.velocidadeAtual -= 10; // this é undefined
    }
}

carro.acelerar();
carro.desacelerar();
console.log(carro.velocidadeAtual);