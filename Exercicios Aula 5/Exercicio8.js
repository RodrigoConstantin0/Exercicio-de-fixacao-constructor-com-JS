class Cachorro {
    constructor (nome, raca, idade){
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    latir() {
        console.log(`${this.nome} Au au au`);     
    }
    idadeHumana(){
        const idadeHumana = this.idade * 7;
        return idadeHumana;
    }
}
const Cachorro1 = new Cachorro('Lulu','Fila', 8);
const Cachorro2 = new Cachorro('Mel','Golden Retriever', 2);

Cachorro1.latir();
console.log(`${Cachorro1.nome} tem ${Cachorro1.idade} anos de idade canina e ${Cachorro1.idadeHumana()} anos idade humana.`)

Cachorro2.latir();
console.log(`${Cachorro2.nome} tem ${Cachorro2.idade} anos de idade canina e ${Cachorro2.idadeHumana()} anos idade humana.`)


