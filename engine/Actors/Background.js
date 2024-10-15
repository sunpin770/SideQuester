class Background extends ex.Actor {
    constructor(height, width, src) {
        super({
            x: 0,
            y: 0,
            anchor: ex.vec(0, 0),
            width: width,
            height: height,
            color: ex.Color.Yellow,
        });
        this.protoImgSrc = src;
    };
    //onInitialize() {
    //    //this.graphics.use(this.protoImgSrc.toSprite())
    //}
}