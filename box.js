class Box{ 
constuctor(){
    box_options={
        restitution:1
    }
    this.body=Bodies.rectangle(200,100,50,50,box_options)
    this.width=50;
    this.height=50;
    World.add(myWorld,this.body)

}
display(){
    var pos=this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
}
}