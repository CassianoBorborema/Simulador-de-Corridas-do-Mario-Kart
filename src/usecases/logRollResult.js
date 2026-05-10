//Show results of dice and attributes
export async function logRollResult(playerName, block, diceResult, attribute) {
  console.log(
    `${playerName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`,
  );
}
