class RelatorioFinaceiro {
    constructor(mes, ano){
        this.mes = mes;
        this.ano = ano;
        this.despesas = [];
    }
    adicionarDespesa(descricao, valor){
        this.despesas.push({descricao, valor});
    }
    calcularTotalDespesas(){
        let totalDespesas = 0;
        for (let despesa of this.despesas){
            totalDespesas += despesa.valor;
        }
        return totalDespesas;
    }
    calcularTotalDespesasPorMesAno(mes, ano){
        let totalDespesas = 0;
        for (let despesa of this.despesas){
            if(despesa.mes === mes && despesa.ano === ano){
                totalDespesas += despesa.valor;
            }
        }
        return totalDespesas;
    }
}
const relatorio = new RelatorioFinaceiro("Janeiro", 2023);

relatorio.adicionarDespesa("Compra de material para o escritorio", 850);
relatorio.adicionarDespesa("conta de energia", 180);
relatorio.adicionarDespesa("Aluguel", 2100);
relatorio.adicionarDespesa("Refeição", 220);

console.log(`total de despesas em ${relatorio.mes} de ${relatorio.ano}: $${relatorio.calcularTotalDespesas()}`);
console.log(`total de despesas em janeiro de 2023: $${ relatorio.calcularTotalDespesasPorMesAno("janeiro", 2023)}`);
