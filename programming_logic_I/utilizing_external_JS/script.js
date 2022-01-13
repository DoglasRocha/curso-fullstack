let olderPersonName = prompt("Digite o nome da pessoa mais velha.");
let olderPersonAge = prompt("Digite a idade da pessoa mais velha");

let youngerPersonName = prompt("Digite o nome da pessoa mais nova.");
let youngerPersonAge = prompt("Digite a idade da pessoa mais nova.");

let ageDifference = olderPersonAge - youngerPersonAge;

alert(`Pessoa mais velha: ${olderPersonName}\nIdade: ${olderPersonAge}\n\n`);
alert(`Pessoa mais nova: ${youngerPersonName}\nIdade: ${youngerPersonAge}\n\n`);
alert(`Diferença de idade: ${ageDifference}`);