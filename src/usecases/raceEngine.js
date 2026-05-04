//Geração de pistas e rodadas
export function getRandomBlock() {
  const random = Math.floor(Math.random() * 3);

  switch (random) {
    case 0:
      return "RETA";
    case 1:
      return "CURVA";
    case 2:
      return "CONFRONTO";
    default:
      return "RETA";
  }
}

export function raceEngine(character1, character2) {
  const blocks = [];

  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    // sortear bloco de pista
    const block = getRandomBlock();
    blocks.push(block);

    console.log(`Bloco: ${block}`);
  }

  return blocks;
}
