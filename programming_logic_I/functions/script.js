function main()
{
    let spaceshipName = prompt('Qual o nome de sua nave?');
    let velocity = 0;
    let option;

    while (option !== '4')
    {
        option = print_options();

        switch (option) 
        {
            case '1':
                velocity = change_velocity(velocity, 5);
                break;
    
            case '2':
                velocity = change_velocity(velocity, -5);
                break;
    
            case '3':
                alert(`Nome da espaço-nave: ${spaceshipName}\nVelocidade: ${velocity}Km/s`);
                break;

            case '4':
                alert('Saindo do programa...')
                break;
        }
    }
}


function print_options()
{
    let option = prompt('O que você deseja fazer, piloto?\n' +
                        '1 - Acelerar a nave em 5km/s\n' + 
                        '2 - Desacelerar a nave em 5km/s\n' + 
                        '3 - Imprimir dados de bordo\n' + 
                        '4 - Sair do programa');
    
    if (option !== '1' && option !== '2' && option !== '3' && option !== '4')
    {
        return print_options();
    }

    return option;
}


function change_velocity(velocity, acceleration)
{
    velocity += acceleration;

    if (velocity < 0)
    {
        return 0;
    }

    return velocity;
}


main();