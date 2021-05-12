class Roof{
constructor(x,y){
this.roof_object = {

   isStatic : true

}

this.roof = Bodies.rectangle(x,y,800,50,this.roof_object);
World.add(world, this.roof);  
}

display(){
    
    rectMode(CENTER);
    var pos = this.roof.position;
    rect(pos.x,pos.y,800,50);
}


} 