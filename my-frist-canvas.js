let carSize = 100;
let gameState = {
    speed: 1,
    fps: 1000 / 60,
    pause: false,
}
let myCanvas = document.getElementById("my-canvas");
let canvasContext = myCanvas.getContext("2d");
canvasContext.fillStyle = "green";

let direction = 10;
let startPoint = 10;
let carIndo = new Image();
carIndo.src = './carro.png';
let carVoltando = new Image();
carVoltando.src = './carro2.png';

let carOne = {
    x: 200,
    startPoint: (Math.random() * 600),
    direction: 1,
    variancia: 1
};

let carLast = {
    x: 100,
    startPoint: (Math.random() * 600),
    direction: 1,
    variancia: 1
}

let newCar = {
    x: 300,
    startPoint: (Math.random() * 600),
    direction: 1,
    variancia: 1
}

let cars = [carLast, carOne, newCar];


//setInterval(
    function gameLoop() {// game loop
        setTimeout(gameLoop, gameState.fps);
        if (gameState.pause) {
            console.log('Pausado');
            return;
        }
        canvasContext.clearRect(0, 0, myCanvas.width, myCanvas.height);

        if (gameState.pause) {
            console.log("Pause.");
            return;
        }

        for (let i=0;i < cars.length; i++) {
            cars[i].variancia++
            if (cars[i].direction == 1) {
                if ((cars[i].variancia % 500) < 250) {
                    canvasContext.drawImage(carIndo, cars[i].startPoint, cars[i].x++, carSize, carSize);
                } else {
                    canvasContext.drawImage(carIndo, cars[i].startPoint, cars[i].x--, carSize, carSize);
                }
            } else if (cars[i].direction == -1) {
                if ((cars[i].variancia % 500) < 250) {
                    canvasContext.drawImage(carVoltando, cars[i].startPoint, cars[i].x++, carSize, carSize);
                } else {
                    canvasContext.drawImage(carVoltando, cars[i].startPoint, cars[i].x--, carSize, carSize);
                }
            }
        
            //canvasContext.drawImage(car, cars[i].startPoint, cars[i].x, carSize, carSize);
            cars[i].startPoint = cars[i].startPoint + (cars[i].direction * gameState.speed);

            cars[i].startPoint = cars[i].startPoint + cars[i].direction;
            if (cars[i].startPoint >= myCanvas.width) {
                cars[i].startPoint = (carSize * -1);
            }
            if (cars[i].startPoint < -carSize) {
                cars[i].startPoint = myCanvas.width;
            }
        }    

        startPoint = startPoint + (10 * direction);
        
        if (startPoint >= myCanvas.width) {
            startPoint = 0;
        }

        if (startPoint < 0) {
            startPoint = myCanvas.width;
        }
}//, gameState.fps); 
gameLoop();



document.addEventListener('keydown', function(event) {
    let escolha = document.getElementById('aviao').value
    console.log(`${escolha} Escolha`)
    switch (event.key) {
        case 'ArrowLeft':
            for (let c=0; c < cars.length; c++) {
                cars[escolha].direction = -1
            }
            gameState.fps = gameState.fps * 2;
            break;

        case 'ArrowRight':
            for (let c=0; c < cars.length; c++) {
                cars[escolha].direction = 1
            }
            gameState.fps = gameState.fps / 2;
            break;

        /*
        case 'ArrowUp':

            break;
        case 'ArrowDown':
            
            break;
        */
    }

    
    if (event.key == 'n') {
        let carDirectionDelta = (Math.random()*1);
        let carDirection = 1;
        if (carDirectionDelta < 0.5) {
            carDirection = -1;
        }
        let arrivingCar = {
            x: (Math.random() * 600),
            startPoint: (Math.random() * 600),
            direction: carDirection,
            variancia: 1
        }
        cars[cars.length] = arrivingCar;
    }
    console.log(event.key);
})
