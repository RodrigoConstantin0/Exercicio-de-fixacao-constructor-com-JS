class Produto {
    constructor (nome, preco, quantidadeEmEstoque){
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
    calcularValorTotalEmEstoque(){
        return this.preco * this.quantidadeEmEstoque;
    }
    adicionarEstoque(quantidade){
        this.quantidadeEmEstoque += quantidade;
    }
    removerDoEstoque(quantidade){
        if(quantidade <= this.quantidadeEmEstoque) {
            this.quantidadeEmEstoque -= quantidade;
        }else{
            console.log("Quantidade solicitada maior que presente no estoque.");
        }
    }
}

const produto1 = new Produto ('Camiseta', 25, 50);
const produto2 = new Produto ('Meia',2, 25);

console.log(`O valor total em estoque de ${produto1.nome} é: R$${produto1.calcularValorTotalEmEstoque()}`);
console.log(`O valor total em estoque de ${produto2.nome} é: R$${produto2.calcularValorTotalEmEstoque()}`);

produto1.adicionarEstoque(10);
produto2.adicionarEstoque(30);

console.log(`Após alterções, O valor total em estoque de ${produto1.nome } é: R$${produto1.calcularValorTotalEmEstoque()}`);
console.log(`Após alterações, O valor total em estoque de ${produto2.nome} é: R$${produto2.calcularValorTotalEmEstoque()}`);
