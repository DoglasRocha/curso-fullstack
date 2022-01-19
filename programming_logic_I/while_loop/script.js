let spaceshipName = prompt('Qual o nome de sua nave?');

let warpCount = 0;
let acceptSpeed = confirm('Deseja entrar em dobra espacial?');

while (acceptSpeed)
{
    warpCount++;
    acceptSpeed = confirm('Deseja realizar a próxima dobra?')
}

alert(`Nome da nave: ${spaceshipName}\nNúmero de dobras realizadas: ${warpCount}`);