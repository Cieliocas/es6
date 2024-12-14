// este arquivo é destinado a apresentar exemplos de uso de map e set

let meuMap = new Map(); // objeto map
meuMap.set('nome', 'cielio'); // chave, valor
meuMap.set('stack', 'html, css, js'); // chave, valor


console.log(meuMap); // Map { 'nome' => 'cielio' } // chave, valor

const nome = meuMap.get('nome'); // cielio // pega o valor da chave

console.log(nome); // cielio

// meuMap.size; // 1 // tamanho do map

console.log(meuMap.size); // 1 // imprime o tamanho do map

// meuMap.has('nome'); // true // verifica se a chave existe

console.log(meuMap.has('sobrenome')); // imprime valor true

// meuMap.clear(); // limpa o map

console.log(meuMap.size); // 0 // imprime o tamanho do map após limpeza

for (let chave of meuMap.keys()) {
    console.log(chave); // imprime a chave // iterando sobre as chaves
}

for (let valor of meuMap.values()) {
    console.log(valor); // imprime o valor // iterando sobre os valores
}