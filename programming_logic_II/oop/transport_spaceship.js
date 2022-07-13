class TransportSpaceship extends Spaceship {
  constructor() {
    super();
    this.seatsQuantity = prompt(
      "Digite a quantidade de assentos disponíveis na nave:"
    );
  }

  get spaceshipText() {
    return `Nome: ${this.name}\nQuantidade de tripulantes: ${this.crewQuantity}\nVelocidade: ${this.velocity}\nQuantidade de Assentos: ${this.seatsQuantity}`;
  }
}
