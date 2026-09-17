const nome = prompt("Digite seu nome:");

let renda = Number(prompt("Digite sua renda mensal:"));

while (isNaN(renda)) {
    renda = Number(prompt("Digite uma renda válida:"));
}

let quantidadeDespesas = Number(
    prompt("Digite a quantidade de despesas que você possui:")
);

while (isNaN(quantidadeDespesas)) {
    quantidadeDespesas = Number(
        prompt("Digite uma quantidade de despesas válida:")
    );
}

if (quantidadeDespesas < 1) {
    quantidadeDespesas = 1;
} else if (quantidadeDespesas > 5) {
    quantidadeDespesas = 5;
}

let totalDespesas = 0;

for (let contador = 1; contador <= quantidadeDespesas; contador++) {
    const descricao = prompt(`Digite a descrição da despesa ${contador}:`);
    const valor = Number(prompt(`Digite o valor da despesa ${contador}:`));

    totalDespesas += valor;
}

const saldo = renda - totalDespesas;

console.log("Nome:", nome);
console.log("Renda Mensal:", renda);
console.log("Total de Despesas:", totalDespesas);
console.log("Saldo:", saldo);

if (totalDespesas > renda) {
    console.log("⚠️ Atenção: você gastou mais do que ganhou.");
} else {
    const sobra = renda - totalDespesas;

    if (sobra >= renda * 0.30) {
        console.log("✅ Ótimo: boa margem de sobra.");
    } else {
        console.log("🙂 Ok: dá para melhorar a sobra.");
    }
}

const percentualDespesas = (totalDespesas / renda) * 100;

console.log(
    "Percentual de Despesas em relação à Renda:",
    percentualDespesas.toFixed(2) + "%"
);

alert(
    `Olá, ${nome}!\n\n` +
    `Renda mensal: R$ ${renda.toFixed(2)}\n` +
    `Total de despesas: R$ ${totalDespesas.toFixed(2)}\n` +
    `Saldo: R$ ${saldo.toFixed(2)}\n` +
    `Percentual da renda comprometido: ${percentualDespesas.toFixed(2)}%`
);