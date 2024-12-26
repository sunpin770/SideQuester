
class NPC extends ex.Actor {
    constructor(x, y, color) {
        super({
            x: x,
            y: y,
            width: 50,
            height: 100,
            //width: 40,
            //height: 40,
            color: color || ex.Color.Red,
        });
        this.spriteDir = 3;
        this.body.collisionType = ex.CollisionType.Fixed;
    };
};