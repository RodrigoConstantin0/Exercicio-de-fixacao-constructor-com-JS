class Aluno {
    constructor(nome, matricula, notas){
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }    

    calcularMedia(){
        if (this.notas.length === 0) {
            return 0; // Retorna 0 se não houver notas
        } else {
            const total = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
            return total / this.notas.length; // Calcula e retorna a média
        }
    }
}
const aluno1 = new Aluno('João', '2023001', [7, 8, 9]);
const aluno2 = new Aluno('Maria', '2023002', [6, 8, 7]);
const mediaAluno1 = aluno1.calcularMedia();
const mediaAluno2 = aluno2.calcularMedia();

console.log(`A média do aluno ${aluno1.nome} é: ${mediaAluno1}`);
console.log(`A média do aluno ${aluno2.nome} é: ${mediaAluno2}`);
