var scene;
var paddle;
var paddle2;
var ball;
var CHANGE = 5;

function Paddle() {

    paddle.checkKeys = function() {
        if (keysDown[K_UP]) {
            paddle.changeYby(-CHANGE);
            if (paddle.y - paddle.width / 2 < 0)
                paddle.setY(paddle.width / 2);
        }

        if (keysDown[K_DOWN]) {
            paddle.changeYby(CHANGE);
            if (paddle.y + paddle.width / 2 > scene.height)
                paddle.setY(scene.height - paddle.width / 2);
        }
    };
}

function init() {
    scene = new Scene();
    paddle = new Sprite(scene, "mario.jpg", 100, 100);
    paddle2 = new Sprite(scene, "sonic.jpg", 100, 100);
    paddle.setPosition(scene.width / 15, scene.height / 2);
    paddle2.setPosition(scene.width - 50, scene.height / 2);
    paddle.setAngle(90);
    paddle.setSpeed(0);
    paddle2.setAngle(90);
    paddle2.setMoveAngle(180);
    paddle2.setSpeed(10);
    paddle2.setBoundAction(BOUNCE);
    ball = new Sprite(scene, "ball.png", 25, 25);
    ball.setMoveAngle(240);
    ball.setSpeed(8);
    ball.setBoundAction(BOUNCE);
    
    scene.start();

}


function update() {
    scene.clear();
    paddle.update();
    paddle2.update();
    ball.update();
    paddle.checkKeys();
    paddle2.checkKeys();
}