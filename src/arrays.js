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
}); // retorna true se pelo menos um elemento atender a condição

console.log(existeAlguemDeBackend);

function filtraAlunosDeBackend(item) {
    return item.curso === 'Backend';
}

// função quebrada em partes
const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend); // retorna um array com os elementos que atendem a condição

// const alunosDeBackend = alunos2.filter(function(item) {
//     return item.curso === 'Backend';
// }); // retorna um array com os elementos que atendem a condição

console.log(alunosDeBackend);

const nums = [10, 20, 30, 10];

// reduce - reduz o array a um único valor
const soma = nums.reduce(function(acumulador, itemAtual) {
    return acumulador += itemAtual;
}, 0);

console.log(soma);

// como seria com o comando for
let soma2 = 0;
for (let i = 0; i < nums.length; i++) {
    soma2 += nums[i];
}

console.log(soma2);

// usando reduce com string - alunos2
const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    return acumulador += `${itemAtual.nome} `; // concatenando os nomes
}, ''); // exemplo: 'Gustavo Julia Paula João Lucio'

console.log(nomesDosAlunos);