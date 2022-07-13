class Spaceship {
  constructor(name, crewCount) {
    this.name = name;
    this.crewCount = crewCount;
    this.isHitched = false;
    this.entranceDoorsOpen = false;
  }

  hitch() {
    this.isHitched = true;
    this.entranceDoorsOpen = true;
  }
}

class SpacialStation {
  constructor() {
    this.spaceshipsInside = [];
  }

  registerSpaceship() {
    let name = prompt("Qual o nome da espaçonave?");
    let crewCount = prompt("Quantos tripulantes tem a nave?");
    let newSpaceship = new Spaceship(name, crewCount);
    this.spaceshipsInside.push(newSpaceship);
    newSpaceship.hitch();
  }

  printSpaceships() {
    let text = "As espaçonaves engatadas são:\n";
    this.spaceshipsInside.forEach(
      (spaceship, index) =>
        (text += `Nave ${index + 1}: ${spaceship.name}, ${
          spaceship.crewCount
        } tripulantes\n`)
    );

    alert(text);
  }
}

let option;
let spacialStation = new SpacialStation();

do {
  option = prompt(
    "O que você deseja fazer?\n(1) Engatar nave\n(2) Imprimir naves engatadas\n(3) Sair do programa"
  );
  switch (option) {
    case "1":
      spacialStation.registerSpaceship();
      break;

    case "2":
      spacialStation.printSpaceships();
      break;

    case "3":
      break;

    default:
      alert("Opção inválida!\n");
  }
} while (option != "3");
