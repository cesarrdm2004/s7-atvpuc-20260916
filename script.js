const nome = prompt("Digite seu nome:");
const renda = prompt("Digite sua renda mensal:");
const quantidadeDespesas = prompt("Digite a quantidade de despesas que você possui:");

let totalDespesas = 0;
let contador = 1;

while (contador <= quantidadeDespesas) {
    const descricao = prompt(`Digite a descrição da despesa ${contador}:`);
    const valor = Number(prompt(`Digite o valor da despesa ${contador}:`));
    totalDespesas += valor;
    contador++;
}

const saldo = renda - totalDespesas;
console.log("Nome:", nome);
console.log("Renda Mensal:", renda);
console.log("Total de Despesas:", totalDespesas);
console.log("Saldo:", saldo);

if (saldo > 0 ) {
    console.log("Situação: orçamento positivo.");
} else if (saldo ===0) {
    console.log("Situação: orçamento equilibrado.");
} else {
    console.log("Situação: orçamento negativo.");
}