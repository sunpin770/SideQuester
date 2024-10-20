class Player extends NPC {
    constructor(x, y, color, speed) {
        super(x, y, color);
        this.speed = speed;
        this.body.collisionType = ex.CollisionType.Active;
    }
    update(engine, delta) {
        super.update(engine, delta);
        move(this);
    };
}
