function Pokemon(nomeDoPokemon, tipoDoPokemon) { // Função construtora
    this.nome = nomeDoPokemon; // this é utilizado para referenciar o objeto que será criado
    this.tipo = tipoDoPokemon; // atributos do objeto
}

const pikachu = new Pokemon('Pikachu', 'Elétrico'); 
// criando um novo objeto com a função construtora


