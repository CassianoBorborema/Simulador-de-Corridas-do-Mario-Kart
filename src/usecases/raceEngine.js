import { rollDice } from "./dice.js";
import { player1, player2 } from "../entities/objects.js";
import { getRandomBlock } from "./randomRace.js";
import { logRollResult } from "./logRollResult.js";

//Engine principal
export async function raceEngine(player1, player2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    // sortear bloco de pista
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    //rolar dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + player1.velocity;
      totalTestSkill2 = diceResult2 + player2.velocity;

      await logRollResult(
        player1.name,
        "velocity",
        diceResult1,
        player1.velocity,
      );
      await logRollResult(
        player2.name,
        "velocity",
        diceResult2,
        player2.velocity,
      );
    }
    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + player1.manobra;
      totalTestSkill2 = diceResult2 + player2.manobra;

      await logRollResult(
        player1.name,
        "manobra",
        diceResult1,
        player1.manobra,
      );
      await logRollResult(
        player2.name,
        "manobra",
        diceResult2,
        player2.manobra,
      );
    }
    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + player1.power;
      let powerResult2 = diceResult2 + player2.power;
    }

    //verify winner
    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${player1.name} marcou um ponto!`);
      player1.pontos++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${player2.name} marcou um ponto!`);
      player2.pontos++;
    }

    console.log("=========================================================");
  }
}
