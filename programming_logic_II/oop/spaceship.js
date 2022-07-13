class Spaceship {
  constructor() {
    this.name = prompt("Digite o nome da nave:");
    this.crewQuantity = prompt("Digite a quantidade de tripulantes da nave:");
    this.velocity = 0;
  }

  static get deacceleration() {
    return 0.17;
  }

  get spaceshipText() {
    return `Nome: ${this.name}\nQuantidade de tripulantes: ${this.crewQuantity}\nVelocidade: ${this.velocity}`;
  }

  speedUp(acceleration) {
    this.velocity += acceleration * (1 - Spaceship.deacceleration);
  }

  printSpaceship() {
    alert(this.spaceshipText);
  }
}
