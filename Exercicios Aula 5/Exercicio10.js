class Conta {
    constructor(numeroConta, saldo, titular){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular;
        }
        verificarDebito(){
            return this.saldo < 0;
        }
        depositar(valor){
            if (valor > 0){
                this.saldo += valor;
                console.log(`Deposito de $${valor} Realizado com sucesso ! Novo saldo: $${this.saldo}`);
            }else {
                console.log(`Não é possivel realizar um deposito de valor negativo.`);
            }
        }
}
const conta1 = new Conta(656565, 1200, 'Higor Monteiro');
const conta2 = new Conta(654821, -500, 'Erique Alves');

const mensagemConta1 = conta1.verificarDebito() ? 'Sim' : 'Não';
const mensagemConta2 = conta2.verificarDebito() ? 'Sim' : 'Não';

console.log(`A conta de ${conta1.titular} proprietário do número da conta ${conta1.numeroConta} está em débito? ${mensagemConta1}`);
console.log(`A conta de ${conta2.titular} proprietário do número da conta ${conta2.numeroConta} está em débito? ${mensagemConta2}`);

conta1.depositar(1000);
conta2.depositar(-500);