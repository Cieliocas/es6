function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

// Função muito pesada utilizando Promise
const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => { // resolve = sucesso, reject = erro
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoess++; // teste de erro com variavel errada
        }
        resolve(execucoes); // sucesso
    } catch (error) {
        reject('deu ruim'); // erro na iteracao dos numeros
    }
});

// Promise é uma função assíncrona que pode ser resolvida ou rejeitada

// o código é processado de forma assíncrona e paralela utilizando o promise

console.log('Iniciando a função muito pesada');
// console.log(funcaoMuitoPesada());
funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro)); // sucesso
// o then é chamado quando a promise é resolvida
// o catch é chamado quando a promise é rejeitada
console.log('Função muito pesada finalizada');









