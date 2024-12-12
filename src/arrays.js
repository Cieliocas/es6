const redesSociais = ['twitter', 'instagram', 'facebook'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

redesSociais.forEach(function (redeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${redeSocial}`);
});

const alunos = ['Gustavo', 'José', 'Maria', 'João'];

const alunos2 = alunos.map(function (itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend',
    }
});

console.log(alunos2);

const numeros = [1, 2, 3, 4, 5];
const dobroDosNumeros = numeros.map(function (numeroAtual) {
    return numeroAtual * 2;
});

console.log(dobroDosNumeros);