// function Pokemon(nomeDoPokemon, tipoDoPokemon) { // Função construtora
//     this.nome = nomeDoPokemon; // this é utilizado para referenciar o objeto que será criado
//     this.tipo = tipoDoPokemon; // atributos do objeto
// }

// const pikachu = new Pokemon('Pikachu', 'Elétrico'); 
// criando um novo objeto com a função construtora

// No código acima, a função funcaoMuito ______________________

class Pokemon { // Função construtora
    nome = ''; // atributos do objeto com valor vazio
    tipo = ''; // atributos do objeto
}

 // criando um novo objeto com a função construtora
const pikachu = new Pokemon();
pikachu.nome = 'Pikachu'; // atribuindo valores aos atributos
pikachu.tipo = 'Elétrico'; // atribuindo valores aos atributos
console.log(pikachu);