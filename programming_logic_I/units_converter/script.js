let lYDistance = parseFloat(prompt('Informe a distância em anos-luz a ser convertida'));

let chosenOption = prompt('Informe a unidade desejada:\n1 - Parsec (pc)\n2 - Unidade Astronômica (AU)\n3 - Quilômetros (km)');

let unit;
let convertedValue;

switch (chosenOption)
{
    case '1':
        unit = 'pc';
        convertedValue = lYDistance * 0.306601;
        break;

    case '2':
        unit = 'AU';
        convertedValue = lYDistance * 63241.1;
        break;

    case '3':
        unit = 'Km';
        convertedValue = lYDistance * 9.5 * Math.pow(10, 12);
        break;
        
    default:
        unit = 'Unidade não identificada';
        convertedValue = 'Conversão fora do escopo';
}

alert(`Distância em anos-luz: ${lYDistance}
${unit}: ${convertedValue}`);