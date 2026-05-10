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
      const powerResult1 = diceResult1 + player1.power;
      const powerResult2 = diceResult2 + player2.power;

      console.log(`${player1.name} confrontou com ${player2.name}!🥊`);
      await logRollResult(player1.name, "power", diceResult1, player1.power);
      await logRollResult(player2.name, "power", diceResult2, player2.power);

      if (powerResult1 === powerResult2) {
        console.log(`Confronto Empatado! Nenhum Ponto foi perdido`);
      } else if (powerResult1 > powerResult2) {
        if (player2.pontos > 0) {
          player2.pontos -= 1;
          console.log(`${player2.name} perdeu 1 ponto 🐢`);
        } else {
          console.log(`${player2.name} não perdeu ponto(s)`);
        }
      } else {
        if (player1.pontos > 0) {
          player1.pontos -= 1;
          console.log(`${player1.name} perdeu 1 ponto 🐢`);
        } else {
          console.log(`${player1.name} não perdeu ponto(s)`);
        }
      }
    }
    //verify winner
    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${player1.name} marcou um ponto!`);
      player1.pontos++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${player2.name} marcou um ponto!`);
      player2.pontos++;
    } else if (totalTestSkill1 === totalTestSkill2 && block !== "CONFRONTO") {
      console.log(`Empate`);
    }

    console.log("=========================================================");
  }
}
