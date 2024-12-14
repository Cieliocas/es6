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
    #hp = 100; // atributos do objeto com valor padrão
    // # é utilizado para criar um atributo privado

    constructor(nomeDoPokemon, tipoDoPokemon) { // Função construtora
        this.nome = nomeDoPokemon; 
        // this é utilizado para referenciar o objeto que será criado
        this.tipo = tipoDoPokemon; // atributos do objeto
    }

    atacar(nomeDoAtaque) { // função = método do objeto dentro da classe
    // funcao dentro da classe se torna um método do objeto
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`); // exibindo mensagem
    } // função = método do objeto dentro da classe  

    receberDano(dano) { // função = método do objeto dentro da classe
        this.#hp -= 10; // diminuindo o hp
    } 

    exibeHp() { // função = método do objeto dentro da classe
        console.log(this.#hp); // exibindo o hp
    }
}

class Pikachu extends Pokemon { // Função construtora
    // pikachu é uma classe que extende a classe Pokemon, ou seja ela herda os atributos e métodos da classe Pokemon
    constructor() {
        super('Pikachu', 'Elétrico')
        // super é utilizado para chamar o construtor da classe pai
    }
    atacar() {
        console.log(`${this.nome} atacou com Choque do Trovão`)
        // exibindo mensagem sem precisar passar o nome do ataque      
    }
}

const pikachuDoAsh = new Pikachu(); // criando um novo objeto com a função construtora
pikachuDoAsh.receberDano(); // chamando o método receberDano

pikachuDoAsh.hp = 5000; // alterando o hp
// após tornar hp privado, não é possível alterar o valor do hp
// o hp continua sendo 90

pikachuDoAsh.atacar(); // chamando o método atacar
pikachuDoAsh.exibeHp(); // chamando o método exibeHp

console.log(pikachuDoAsh.hp); // exibindo o hp

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
console.log(pikachuDoAsh instanceof Pokemon); // true