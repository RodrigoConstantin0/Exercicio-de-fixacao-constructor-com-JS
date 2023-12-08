class Carro {
    constructor (marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}
const carro1 = new Carro("Toyota","Corolla", 2022 )
const carro2 = new Carro("honda","civic", 2023)

console.log ("Carro 1:" + carro1.marca, carro1.modelo, carro1.ano);
console.log ("Carro 2:" + carro2.marca, carro2.modelo, carro2.ano);