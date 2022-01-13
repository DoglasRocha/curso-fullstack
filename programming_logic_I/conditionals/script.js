let pilotName = prompt('Qual é seu nome, piloto?');
let velocity = 0;

let intendedVelocity = prompt('Até qual velocidade você gostaria de acelerar a nave?');

if (confirm(`Você tem certeza que deseja acelerar a nave até ${intendedVelocity} Km/s?`))
{
    velocity = intendedVelocity;
}

if (velocity < 0)
{
    alert('Nave está parada. Considere partir e aumentar a velocidade!');
}
else if (velocity < 40)
{
    alert('Você está devagar, podemos aumentar mais.');
}
else if (velocity  < 80)
{
    alert('Parece uma boa velocidade para se manter!');
}
else if (velocity < 100)
{
    alert('Velocidade alta, considere diminuir.');
}
else
{
    alert('Velocidade perigosa. Controle automático forçado!');
}

alert(`Piloto: ${pilotName}
Velocidade: ${velocity} Km/s`);