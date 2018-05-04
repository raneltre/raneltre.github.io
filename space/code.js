var ship;
var game;
var starfield;
var missile;
var missile2;
var timer;
var missiles = [];

function Missile(offsetX, offsetY){
    tMissile = new Sprite(game, 'http://aharrisbooks.net/h5g/h5g_8/missile.png', 30, 20);
    
    tMissile.hide();
    
    tMissile.fire = function(){
        missiles.push(this);
        this.show();
        tMissile.setSpeed(15);
        this.setPosition(ship.x + offsetX, ship.y + offsetY);
        this.setAngle(ship.getImgAngle());
        this.setBoundAction(DIE);
    }
    return tMissile;
}

function Ship(){
    tShip = new Sprite(game, 'http://aharrisbooks.net/h5g/h5g_8/ship.png', 25, 25);
    
    tShip.checkKeys = function(){
        if(keysDown[K_LEFT]){
            this.changeImgAngleBy(-5);
        }
        if(keysDown[K_RIGHT]){
            this.changeImgAngleBy(5);
        }
        if(keysDown[K_UP]){
            this.addVector(this.getImgAngle(), .5);
        }
        if(keysDown[K_SPACE]){
            if(timer.getElapsedTime() >= 0.2){
                missile = new Missile(5, 5);
                missile.fire();
                timer.reset();
            }
        }
        
        this.addVector(this.getImgAngle(), (this.speed / 20));
        
    }
    tShip.checkDrag = function(){
        speed = this.getSpeed();
        speed *= .95
        this.setSpeed(speed);
    }
    return tShip;
}

function init(){
    
    game = new Scene();
    starfield = new Sprite(game, 'http://downloops.com/wp-content/uploads/edd/2017/05/Starfield-Stars-Universe-FlyBy-Motion-Background-Video-Loop-Sample2-1.jpg', 2000, 2000);
    starfield.setSpeed(0);
    timer = new Timer();
    ship = new Ship();
    game.start();
}

function update(){
    game.clear();
    starfield.update();
    ship.checkKeys();
    ship.checkDrag();
    ship.update();
    //FOR EACH LOOP WILL ITERATE THROUGH EACH OBJECT IN AN ARRAY
    missiles.forEach(function(element){
        element.update();
    });
}