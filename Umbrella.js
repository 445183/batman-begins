class Umbrella {
    constructor(x,y){
        var option = {
            isStatic:true
        }

        this.image = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
        this.umbrella = Bodies.circle(x,y,70,option);
        this.radius = 50;
        World.add(world,this.umbrella);
    }
    display(){
        
        var pos = this.umbrella.position;
        var ball=createSprite(pos.x,pos.y+75);
        ball.addAnimation("anima",this.image);
        ball.scale=0.45;

    }
}