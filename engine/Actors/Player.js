class Player extends NPC {
    update(engine, delta) {
        super.update(engine, delta);
        move(this);
    };
}