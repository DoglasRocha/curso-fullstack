class BattleSpaceship extends Spaceship {
  constructor() {
    super();
    this.availableGuns = prompt("Quantas armas a nave tem disponíveis?");
  }

  get spaceshipText() {
    return `Nome: ${this.name}\nQuantidade de tripulantes: ${this.crewQuantity}\nVelocidade: ${this.velocity}\nArmas Disponíveis: ${this.availableGuns}`;
  }
}
