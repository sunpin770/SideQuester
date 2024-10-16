function move(actor) {
    if (SQ.input.keyboard.isHeld(ex.Input.Keys.W)) {
        actor.pos.y -= actor.speed;
    };
    if (SQ.input.keyboard.isHeld(ex.Input.Keys.A)) {
        actor.pos.x -= actor.speed;
    }
    if (SQ.input.keyboard.isHeld(ex.Input.Keys.S)) {
        actor.pos.y += actor.speed;
    }
    if (SQ.input.keyboard.isHeld(ex.Input.Keys.D)) {
        actor.pos.x += actor.speed;
    }
}