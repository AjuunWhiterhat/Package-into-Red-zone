class Horizontal {
    constructor(x,y,width,height){
     var options ={
         'isStatic':true,
         'restituition':0.4,
     }
     
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;

     World.add(world, this.body);
    }

    display(){
        var pos = this.body.position
        push();
        fill("red");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
};