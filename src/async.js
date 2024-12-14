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

const promiseComParametro = (loguin, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${loguin}`);
        }, 3000)
    });
}

// Promise é uma função assíncrona que pode ser resolvida ou rejeitada

// o código é processado de forma assíncrona e paralela utilizando o promise

console.log('Iniciando a função muito pesada');
// console.log(funcaoMuitoPesada());
// funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
// o then é chamado quando a promise é resolvida
// o catch é chamado quando a promise é rejeitada
console.log('Função muito pesada finalizada');

// o código acima é assíncrono, ou seja, ele não é executado de forma sequencial

async function execucaoPrincipal() {
    console.log('inicio')
    // await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
    promiseComParametro('cielio@mail.com', '123456').then(resultado => {
        console.log(resultado)
    })
    // essa promise com parametro é uma função assíncrona que retorna uma promise com um tempo de 3 segundos

    try { // try para tentar executar o código esperando o resultado
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado)
    } catch (e) { // catch para exibir o erro caso ocorra
        console.log(e)
    }

    console.log('fim')
}

execucaoPrincipal();







