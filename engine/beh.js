
class Player extends ex.Actor {
    constructor() {
        super({
            x: 0,
            y: 0,
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
class Background extends ex.Actor {
    constructor(height, width, src) {
        super({
            x: 0,
            y: 0,
            anchor: ex.vec(0, 0),
            width: width,
            height: height,
        });
        this.protoImgSrc = src;
    };
    onInitialize() {
        this.graphics.use(this.protoImgSrc.toSprite())
    }
}

const background1 = new Background(3200, 4400, resources.backgroundTutorial);
const you = new Player();


you.body.collisionType = ex.CollisionType.None;