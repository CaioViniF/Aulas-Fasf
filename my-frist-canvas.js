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
let car = new Image();
car.src = './carro.png';

let carOne = {
    x: 200,
    startPoint: (Math.random() * 600),
    direction: 1
};

let carLast = {
    x: 100,
    startPoint: (Math.random() * 600),
    direction: 1
}

let newCar = {
    x: 300,
    startPoint: (Math.random() * 600),
    direction: -1
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
            canvasContext.drawImage(car, cars[i].startPoint, cars[i].x, carSize, carSize);
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
    if (event.key == 'ArrowLeft') {
        gameState.fps = gameState.fps * 2;
    }
    
    if (event.key == 'ArrowRight') {
        gameState.fps = gameState.fps / 2;
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
        }
        cars[cars.length] = arrivingCar;
    }
    console.log(event.key);
})