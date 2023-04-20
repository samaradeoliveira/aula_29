class Link {
    //bodyA corpo da corda
    //bodyBcorpo da fruta
    constructor(bodyA, bodyB) {
        //var para receber o ultimo elemento do corpo da corda
        var lastlink = bodyA.body.bodies.length - 2;

        // a restrição
        this.link = Constraint.create(
            {
                bodyA: bodyA.body.bodies[lastlink],
                pointA: { x: 0, y: 0 },
                bodyB: bodyB,
                pointB: { x: 0, y: 0 },
                length: 0,
                stiffness: 0.01
            });
        World.add(engine.world, this.link);
    }
}
