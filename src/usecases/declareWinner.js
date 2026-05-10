import { player1 } from "../entities/objects.js";
import { player2 } from "../entities/objects.js";

export async function declareWinner(player1, player2) {
  console.log("Resultado Final:");
  console.log(`${player1.name}: ${player1.pontos} ponto(s)`);
  console.log(`${player2.name}: ${player2.pontos} ponto(s)`);

  console.log(
    player1.pontos === player2.pontos
      ? `A corrrida terminou em empate 🏎️`
      : player1.pontos > player2.pontos
        ? `\n${player1.name} é o Vencedor! Parabéns! 🏆`
        : `\n${player2.name} é o Vencedor| Parabéns! 🏆`,
  );
}
