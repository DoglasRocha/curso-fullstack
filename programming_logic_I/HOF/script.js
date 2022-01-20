function main()
{
    let speed = 150;
    
    brake(speed, speed => alert(`Velocidade atual: ${speed} Km/s`));

    alert('A nave está parada e as comportas podem ser abertas!');
}


let brake = (speed, printer) =>
{
    speed -= 20;

    if (speed <= 0)
    {
        return 0;
    }

    printer(speed);
    brake(speed, printer);
}


main();