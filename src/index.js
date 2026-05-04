import { player1, player2 } from "./entities/objects.js";
import { raceEngine } from "./usecases/raceEngine.js";

//function auto invoke
(async function main() {
  console.log(
    `🏁🚥 Corrida entre ${player1.name} e ${player2.name} começando...\n`,
  );

  const blocks = raceEngine(player1, player2);
  console.log(`Blocos sorteados: ${blocks.join(" | ")}`);
})();
