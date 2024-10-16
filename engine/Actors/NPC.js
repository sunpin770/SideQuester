
class NPC extends ex.Actor {
    constructor(x, y, color) {
        super({
            x: x,
            y: y,
            width: 50,
            height: 100,
            color: color || ex.Color.Red,
        });
        this.body.collisionType = ex.CollisionType.Fixed;
    };
};