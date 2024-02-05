// Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando

// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

let pessoas = [];
let continuar = true;

while (continuar) {
  let pessoa = {};
  pessoa.nome = prompt("Informe o nome:");
  pessoa.idade = prompt("Informe a idade:");
  pessoa.trabalhando = prompt("Está trabalhando? (s/n)") === "s";

  if (pessoa.trabalhando) {
    pessoa.salario = prompt("Informe o salário:");
  }

  pessoas.push(pessoa);

  continuar = prompt("Deseja continuar cadastrando? (s/n)") === "s";
}

console.log("Pessoas desempregadas:");
for (let i = 0; i < pessoas.length; i++) {
  if (!pessoas[i].trabalhando) {
    console.log("Nome: " + pessoas[i].nome + ", Idade: " + pessoas[i].idade);
  }
}

console.log("Pessoas empregadas com salários menores que 2500:");
for (let i = 0; i < pessoas.length; i++) {
  if (pessoas[i].trabalhando && pessoas[i].salario < 2500) {
    console.log(
      "Nome: " +
        pessoas[i].nome +
        ", Idade: " +
        pessoas[i].idade +
        ", Salário: " +
        pessoas[i].salario
    );
  }
}

console.log("Pessoas empregadas com salários maiores que 2500:");
for (let i = 0; i < pessoas.length; i++) {
  if (pessoas[i].trabalhando && pessoas[i].salario >= 2500) {
    console.log(
      "Nome: " +
        pessoas[i].nome +
        ", Idade: " +
        pessoas[i].idade +
        ", Salário: " +
        pessoas[i].salario
    );
  }
}
