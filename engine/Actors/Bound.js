class Bound extends ex.Actor{
    constructor(x, y, height, width, shape, anchor) {
        if (shape == "rect") {
            super({
                x: x,
                y: y,
                height: height,
                width: width,
                collider: ex.Shape.Polygon(
                    [
                        ex.vec(-50, -50),
                        ex.vec(50, -50),
                        ex.vec(50, 50),
                        ex.vec(-50, 50)
                    ],
                    ex.vec(0, 0),
                    false
                )
            });
            this.anchor = anchor || new ex.vec(0, 0);
            this.body.collisionType = ex.CollisionType.Fixed;
        }
    }
}