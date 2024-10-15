
class NPC extends ex.Actor {
    constructor(x, y) {
        super({
            x: x,
            y: y,
            width: 50,
            height: 100,
            color: ex.Color.Red,
        });
        this.body.CollisionType = ex.CollisionType.Active;
    };
};