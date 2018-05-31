function Car(){
    tCar = new Sprite(game, 'http://aharrisbooks.net/h5g/h5g_8/car.png', 50, 50);
    
    tCar.checkKeys = function(){
        if(keysDown[K_LEFT]){
            this.addVector(-90, .8);
        }
        if(keysDown[K_RIGHT]){
            this.addVector(-90, -.8);
        }
    }
    tCar.checkDrag = function(){
        speed = this.getSpeed();
        speed *= .95
        this.setSpeed(speed);
    }
    return tCar;
}

function Obstacle(){
    tBox = new Sprite(game, 'https://opengameart.org/sites/default/files/block_tiles_red_0.png', 50, 50);
    
    tBox.setSpeed(7);
    
    tBox.fall = function(){
        this.setMoveAngle(180);
    };
    
    tBox.reset =  function(){
        newX = Math.random() * this.cWidth;
        newY = Math.random() * this.cHeight;
        this.setPosition(newX, newY);
    };
    tBox.reset();
    return tBox;
}