// Crie um objeto em JavaScript para colocar 5 atributos de um
// notebook. Atribua os seguintes atributos:
// Processador = i7
// Memória = 16GB
// Preço = 5000
// HD = 1TB
// SSD = 256GB
// Por fim, mostre o nome e valor de cada atributo no console,
// exatamente como está na atividade.

let Notebook = {
  Processador: "i7",
  Memoria: "16GB",
  Preco: "5000",
  Hd: "1TB",
  Ssd: "256GB",
};

console.log(`Processador: ${Notebook.Processador}
Memoria: ${Notebook.Memoria}
Preço: ${Notebook.Preco}
Hd: ${Notebook.Hd}
Ssd: ${Notebook.Ssd}`);

for (let atributo in Notebook) {
  console.log(atributo + " = " + Notebook[atributo]);
}
