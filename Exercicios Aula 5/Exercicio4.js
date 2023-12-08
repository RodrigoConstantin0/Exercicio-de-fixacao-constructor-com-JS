class Livro {
    constructor(livro, autor, anoPublicacao){
        this.livro = livro;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }    
}
const livroNovo = new Livro("HarryPotter e o Calice de Fogo", "J.K. Rowling", 2000);
console.log("O Livro:" + livroNovo.livro);
console.log("O Autor(a):" + livroNovo.autor);
console.log("O Ano publicado:" + livroNovo.anoPublicacao);