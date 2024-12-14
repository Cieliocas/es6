function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

console.log('Iniciando a função muito pesada');
funcaoMuitoPesada();
console.log('Função muito pesada finalizada');