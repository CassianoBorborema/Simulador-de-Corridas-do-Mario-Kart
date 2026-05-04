import { player1, player2 } from "./entities/objects.js";
import { raceEngine } from "./usecases/raceEngine.js";

//function auto invoke
(async function main() {
  console.log(
    `🏁🚥 Corrida entre ${player1.name} e ${player2.name} começando...\n`,
  );

  await raceEngine(player1, player2);
})();
