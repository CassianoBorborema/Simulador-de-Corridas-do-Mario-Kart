//Geração de pistas
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
      break;
  }
}
