class Background extends ex.Actor {
    constructor(height, width) {
        super({
            x: width / 3,
            y: height / 4,
            width: width,
            height: height,
        });
    };
    onInitialize() {
        this.boundingBox = new ex.BoundingBox(this.x, this.y, this.x + this.width, this.y + this.height)
    }
}