class Player extends NPC {
    constructor(x, y, color, speed) {
        super(x, y, color);
        this.speed = speed;
    }
    update(engine, delta) {
        super.update(engine, delta);
        move(this);
    };
}