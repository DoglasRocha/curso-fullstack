function createSpaceship(option) {
  return option % 2 == 0 ? new TransportSpaceship() : new BattleSpaceship();
}

let spaceshipOption = parseInt(
  prompt(
    "Qual nave você deseja criar?\n(1) Espaçonave de Batalha\n(2) Espaçonave de Transporte"
  )
);
let spaceship = createSpaceship(spaceshipOption);
let option;

do {
  option = prompt(
    "O que você deseja fazer?\n" +
      "(1) Acelerar a nave\n" +
      "(2) Trocar nave\n" +
      "(3) Imprimir e sair"
  );

  switch (option) {
    case "1":
      spaceship.speedUp(prompt("Quanto você deseja acelerar a espaçonave?"));
      break;

    case "2":
      spaceshipOption++;
      spaceship = createSpaceship(spaceshipOption);
      break;

    case "3":
      spaceship.printSpaceship();
      break;

    default:
      alert("Opção inválida!");
  }
} while (option != "3");
