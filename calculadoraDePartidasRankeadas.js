const readline = require('readline');

function calcularNivel() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Informe o número de vitórias: ', (vitorias) => {
    rl.question('Informe o número de derrotas: ', (derrotas) => {
      let saldoVitorias = parseInt(vitorias) - parseInt(derrotas);

      let nivel;
      if (parseInt(vitorias) < 10) {
        nivel = "Ferro";
      } else if (parseInt(vitorias) >= 11 && parseInt(vitorias) <= 20) {
        nivel = "Bronze";
      } else if (parseInt(vitorias) >= 21 && parseInt(vitorias) <= 50) {
        nivel = "Prata";
      } else if (parseInt(vitorias) >= 51 && parseInt(vitorias) <= 80) {
        nivel = "Ouro";
      } else if (parseInt(vitorias) >= 81 && parseInt(vitorias) <= 90) {
        nivel = "Diamante";
      } else if (parseInt(vitorias) >= 91 && parseInt(vitorias) <= 100) {
        nivel = "Lendário";
      } else {
        nivel = "Imortal";
      }

      console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
      rl.close();
    });
  });
}

calcularNivel();