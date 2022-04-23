let spaceship = {
    name: prompt('Digite o nome da espaçonave: '),
    type: prompt('Digite o tipo da espaçonave: '),
    maxSpeed: prompt('Digite a velocidade máxima da espaçonave: '),
    speed: 0,
    verifySpeed: function() {
        if (this.speed > this.maxSpeed) 
            confirm("Você está " + (this.speed - this.maxSpeed) + " Km/h acima da velocidade máxima permitida!!!");
    },
    increaseSpeed: function() {
        let acceleration = prompt('Digite o quanto você deseja acelerar a nave: ');

        this.speed += parseInt(acceleration);

        this.verifySpeed();
    },
    decreaseSpeed: function() {
        let deacceleration = prompt('Digite o quanto você quer desacelerar a nave: ');

        if (this.speed < deacceleration) 
            this.speed = 0;
        
        else
            this.speed -= parseInt(deacceleration);

        this.verifySpeed();
    },
    stopSpaceship: function() {
        alert('Nome da espaçonave: ' + this.name + '\n'
              + 'Tipo da espaçonave: ' + this.type + '\n'
              + 'Velocidade anterior da nave: ' + this.speed + ' Km/h')
    },
    run: function() {
        let option = prompt('O que você deseja fazer?\n' + 
                            '1) Acelerar a espaçonave\n' +
                            '2) Desacelerar a espaçonave\n' +
                            '3) Parar a espaçonave\n')

        switch (option) {

            case '1':
                this.increaseSpeed();
                this.run();
                break;

            case '2':
                this.decreaseSpeed();
                this.run();
                break;

            case '3':
                this.stopSpaceship();
                break;

            default:
                alert('Opção inválida!!');
                this.run();
        }
    }
}

spaceship.run();