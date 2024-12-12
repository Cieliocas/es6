const redesSociais = ['twitter', 'instagram', 'facebook'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

redesSociais.forEach(function (redeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${redeSocial}`);
});

const alunos = ['Gustavo', 'Julia', 'Paula', 'João'];

const alunos2 = alunos.map(function (itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend',
    }
});

console.log(alunos2);

const paula = alunos2.find(function(item) {
    return item.nome === 'Paula'; // true ou false e retorna undefined se não encontrar
});

console.log(paula);

const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome === 'Paula'; // true ou false e retorna -1 se não encontrar
});

console.log(indiceDaPaula);

alunos2.push({
    nome: 'Lucio',
    curso: 'Backend',
});

// every - retorna true se todos os elementos do array atenderem a condição
const todosOsAlunosSaoDeFrontend = alunos2.every(function(item) {
    return item.curso === 'Frontend'; // retorna true ou false
});

console.log(todosOsAlunosSaoDeFrontend);

const existeAlguemDeBackend = alunos2.some(function(item) {
    return item.curso === 'Backend'; // retorna true ou false
});

console.log(existeAlguemDeBackend);