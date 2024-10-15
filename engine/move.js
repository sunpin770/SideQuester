function move(actor) {
    if (SQ.input.keyboard.isHeld(ex.Input.Keys.W)) {
        actor.pos.y--;
        console.log(ex.Input.Keys.W);
    };
    if (SQ.input.keyboard.isHeld(ex.Input.Keys.A)) {
        actor.pos.x--;
    }
    if (SQ.input.keyboard.isHeld(ex.Input.Keys.S)) {
        actor.pos.y++;
    }
    if (SQ.input.keyboard.isHeld(ex.Input.Keys.D)) {
        actor.pos.x++;
    }
}