let spaceshipName = prompt('Qual o nome de sua espaço-nave?');
let invertedName = '';

for (let i = spaceshipName.length - 1; i > -1; i--)
{
    if (spaceshipName[i].toLowerCase() === 'e')
    {
        break;
    }

    invertedName += spaceshipName[i];
}

alert(`Nome original da nave: ${spaceshipName}\nNome após ocultação: ${invertedName}`);