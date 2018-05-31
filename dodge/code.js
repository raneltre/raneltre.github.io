var car;
var box;
var boxes;
var NUMBOXES = 5;
var game;
var crash;
var track;
var music;

function checkCollisions(indexBox){
    if(car.collidesWith(boxes[indexBox])){
        crash.play();
        game.stop();
        alert("You Crashed! GAME OVER! Hit F5 to try again!");
        music.stop();
        game.reset();
    }
}

function setupBoxes(){
    boxes = [];
    for(var i = 0; i < NUMBOXES; i++){
        boxes.push(new Obstacle());
    }
}

function init(){
    game = new Scene();
    game.setSize (700, 700);
    track = new Sprite(game, 'road.png', 1600, 2000);
    track.setPosition(game.width / 2, game.height / 2);
    track.setSpeed(8);
    track.setMoveAngle(180);
    car = new Car();
    car.setPosition(650, 650);
    car.setAngle(360);
    car.setMoveAngle(90);
    box = new Obstacle();
    setupBoxes();
    crash = new Sound('http://soundbible.com/grab.php?id=1757&type=mp3');
    music = new Sound('bensound-groovyhiphop.mp3');
    music.play();
    game.start();
}

function update(){
    game.clear();
    track.update();
    car.checkKeys();
    car.checkDrag();
    car.update();
    for (var i = 0; i < boxes.length; i++){
        boxes[i].fall();
        checkCollisions(i);
        boxes[i].update();
    }
}