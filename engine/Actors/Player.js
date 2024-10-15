
class Player extends ex.Actor {
    constructor() {
        super({
            x: 200,
            y: 200,
            width: 50,
            height: 100,
            color: ex.Color.Red,
        });
    };
    update(engine, delta) {
        super.update(engine, delta);
        move(this);
    };
}