class Background extends ex.Actor {
    constructor(height, width, src) {
        super({
            x: width / 2,
            y: height / 2,
            width: width,
            height: height,
            color: ex.Color.Yellow,
        });
        this.protoImgSrc = src;
    };
    onInitialize() {
        //this.graphics.use(this.protoImgSrc.toSprite())
        this.boundingBox = new ex.BoundingBox(this.x, this.y, this.x + this.width, this.y + this.height)
    }
}