const fs = require("fs");
const output = "./output/";
function comparar() {
  let setores = fs.readFileSync("./lista.txt", "utf8");

  let comparacao = fs.readFileSync("./comparacao.txt", "utf8");

  let array = setores.split("\n");
  let array_comparacao = comparacao.split("\n");
  let novo_texto = [];

  for (let i = 0; i < array.length; ++i) {
    if (array_comparacao.indexOf(array[i]) === -1) {
      novo_texto.push(array[i]);
    }
  }

  resultado = novo_texto.join("\n");

  if (!fs.existsSync(output)) {
    fs.mkdirSync(output);
  }
  fs.writeFileSync(output + "resultado.txt", resultado);
}

comparar();
