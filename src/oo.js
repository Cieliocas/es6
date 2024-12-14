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

class Pikachu extends Pokemon { // Função construtora
    // pikachu é uma classe que extende a classe Pokemon, ou seja ela herda os atributos e métodos da classe Pokemon
}

const pikachuDoAsh = new Pikachu('Pikachu', 'Elétrico'); // criando um novo objeto com a função construtora

 // criando um novo objeto com a função construtora
const pikachu = new Pokemon('Pikachu', 'Elétrico'); // Mesmo resultado do código comentado abaixo
// pikachu.nome = 'Pikachu'; // atribuindo valores aos atributos
// pikachu.tipo = 'Elétrico'; // atribuindo valores aos atributos
// pikachu.atacar('Choque do Trovão'); // chamando o método atacar
console.log(pikachu); 
// é uma classe e não uma instância pois não tem o new
// o ash tem um pikachu e outra pessoa pode ter outro pikachu
// a alusão é que o pikachu é uma classe e o pikachu do Ash é uma instância da classe

console.log(pikachuDoAsh); // exibindo o objeto

console.log(pikachuDoAsh instanceof Pikachu); // true