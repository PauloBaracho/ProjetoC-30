class Launcher{
    constructor(bodyA, pontoB){
        var options = {
            bodyA: bodyA,
            pointB: pontoB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pontoB;
        this.laucher = Constraint.create(options);
        World.add(world, this.laucher);
    }

    fly(){
        this.laucher.bodyA = null;
    }

    display(){
        if (this.laucher.bodyA) {
        var pointA = this.laucher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}