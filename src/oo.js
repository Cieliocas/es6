// function Pokemon(nomeDoPokemon, tipoDoPokemon) { // Função construtora
//     this.nome = nomeDoPokemon; // this é utilizado para referenciar o objeto que será criado
//     this.tipo = tipoDoPokemon; // atributos do objeto
// }

// const pikachu = new Pokemon('Pikachu', 'Elétrico'); 
// criando um novo objeto com a função construtora

// No código acima, a função funcaoMuito ______________________

class Pokemon { // Função construtora
    // nome = ''; // atributos do objeto com valor vazio
    // tipo = ''; // atributos do objeto
    // com o construtor não precisa criar os atributos vazios 
    // pois eles são criados automaticamente

    constructor(nomeDoPokemon, tipoDoPokemon) { // Função construtora
        this.nome = nomeDoPokemon; 
        // this é utilizado para referenciar o objeto que será criado
        this.tipo = tipoDoPokemon; // atributos do objeto
    }

    atacar(nomeDoAtaque) { // função = método do objeto dentro da classe
    // funcao dentro da classe se torna um método do objeto
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`); // exibindo mensagem
    }
}

 // criando um novo objeto com a função construtora
const pikachu = new Pokemon('Pikachu', 'Elétrico'); // Mesmo resultado do código comentado abaixo
// pikachu.nome = 'Pikachu'; // atribuindo valores aos atributos
// pikachu.tipo = 'Elétrico'; // atribuindo valores aos atributos
pikachu.atacar('Choque do Trovão'); // chamando o método atacar
console.log(pikachu);