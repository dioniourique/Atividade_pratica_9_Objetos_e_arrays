// Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.

let Aluno1 = {
  nome: "Aluno 1",
  nota1: 8,
  nota2: 9,
};

let Aluno2 = {
  nome: "Aluno 2",
  nota1: 7,
  nota2: 10,
};

let mediaAluno1 = (Aluno1.nota1 + Aluno1.nota2) / 2;
let mediaAluno2 = (Aluno2.nota1 + Aluno2.nota2) / 2;
let mediaTurma = (mediaAluno1 + mediaAluno2) / 2;

console.log(
  `Nome: ${Aluno1.nome}, Nota 1: ${Aluno1.nota1}, Nota 2: ${Aluno1.nota2}, Média: ${mediaAluno1}`
);
console.log(
  `Nome: ${Aluno2.nome}, Nota 1: ${Aluno2.nota1}, Nota 2: ${Aluno2.nota2}, Média: ${mediaAluno2}`
);
console.log(`Média da turma: ${mediaTurma}`);
