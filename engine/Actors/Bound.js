class Bound extends ex.Actor{
    constructor(x, y, height, width, shape, anchor) {
        if (shape == "rect") {
            super({
                x: x,
                y: y,
                height: height,
                width: width
            });
            this.anchor = anchor || new ex.vec(0, 0);
            this.body.collisionType = ex.CollisionType.Fixed;
        }
    }
}