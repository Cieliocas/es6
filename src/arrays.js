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
    return item.nome === 'Paula'; // true ou false e retorna undefined se não encontrar
});

console.log(indiceDaPaula);