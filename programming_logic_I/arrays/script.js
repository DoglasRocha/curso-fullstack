const hitchedSpaceships = [
    ["Fenix", 8, true], // plat engate 1
    ["Golias", 10, false], // plat engate 2
    ["Helmet", 5, false], // plat engate 3
    ["Elemental", 3, true], // plat engate 4
    ["Darwin", 15, false] // plat engate 5
];

let spaceshipsWithMoreThan9Tripulants = hitchedSpaceships
                                            .filter(spaceship => spaceship[1] > 9)
                                            .map(spaceship => spaceship[0]);
let indexOfFirstSpaceshipWithPendingConnection = hitchedSpaceships.findIndex(spaceship => !spaceship[2]);
let allNames = hitchedSpaceships.map(spaceship => spaceship[0].toUpperCase());

alert('Naves com mais de 9 tripulantes: ' + spaceshipsWithMoreThan9Tripulants.join(', '));
alert('Plataforma da primeira nave com engate pendente: ' + indexOfFirstSpaceshipWithPendingConnection + 1);
alert('Nome de todas as naves: ' + allNames.join(', '));