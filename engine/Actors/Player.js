class Player extends NPC {
    constructor(x, y, color, speed) {
        super(x, y, color);
        this.speed = speed;
        this.body.collisionType = ex.CollisionType.Active;
        this.collider.set(
            ex.Shape.Edge(
                ex.vec(-25, 50),
                ex.vec(25, 50)
            )
        )
    }
    update(engine, delta) {
        super.update(engine, delta);
    };
}
