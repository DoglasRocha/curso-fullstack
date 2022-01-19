let spaceshipName = prompt('Qual o nome de sua espaço-nave?');
let charToReplace = prompt('Qual o caracter que você deseja substituir?');
let newChar = prompt('Por qual caracter que você deseja substituir?');
let newName = '';

for (let i = 0; i < spaceshipName.length; i++)
{
    if (spaceshipName[i] == charToReplace)
    {   
        newName += newChar
    }
    else
    {
        newName += spaceshipName[i]
    }
}

alert(`O novo nome da nave: ${newName}`);