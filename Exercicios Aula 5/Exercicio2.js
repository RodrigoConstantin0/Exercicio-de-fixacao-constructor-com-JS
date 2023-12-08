class Pessoa {
    constructor (nome, idade, cidade){
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }
}
const  pessoa1 = new Pessoa("Marcia", 30, "Ilhabela");
const pessoa2 = new Pessoa("Rodrigo", 31, "ilhabela");

console.log("A pessoa 1:" + pessoa1.nome, pessoa1.idade, pessoa1.cidade);
console.log("A pessoa 2:" + pessoa2.nome, pessoa2.idade, pessoa2.cidade );