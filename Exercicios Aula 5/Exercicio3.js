class ContaBancaria {
    constructor (numeroConta, saldo, nomeTitular){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.nomeTitular = nomeTitular;
    }
    depositar(valor){
        this.saldo += valor;
        console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`)
    }
    sacar(valor){
        if (valor > this.saldo) {
            console.log ("Saldo Insuficiente")
        }else {
            this.saldo -= valor;
            console.log (`Saque de ${valor} Realizado. Novo saldo: ${this.saldo}`);
        }
    }
}
const minhaConta = new ContaBancaria (85001, 500, "Rodrigo");
console.log(minhaConta);

minhaConta.depositar(500);
minhaConta.sacar(200)
minhaConta.sacar(100)