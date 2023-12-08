class Jogo {
    constructor (nome,genero, classicacaoEtaria){
        this.nome = nome;
        this.genero = genero;
        this.classicacaoEtaria = classicacaoEtaria;
    }
}
const jogo1 = new Jogo ('Super Mario Bros','Aventura','Classificacao livre');
const jogo2 = new Jogo ('Sonic', 'Aventura', 'Classificacao livre');

console.log(`Informações do jogo 1:
Nome: ${jogo1.nome}
Gênero: ${jogo1.genero}
Classificação etária: ${jogo1.classicacaoEtaria}`);

console.log(`Informações do jogo 2:
Nome: ${jogo2.nome}
Gênero: ${jogo2.genero}
Classificação etária: ${jogo2.classicacaoEtaria}`);



