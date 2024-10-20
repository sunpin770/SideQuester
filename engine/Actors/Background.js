class Background extends ex.Actor {
    constructor(height, width) {
        super({
            x: 0,
            y: 0,
            width: width,
            height: height,
        });
        this.anchor = new ex.vec(0, 0);
    };
    onInitialize() {
        this.boundingBox = new ex.BoundingBox(this.x, this.y, this.x + this.width, this.y + this.height)
    }
}