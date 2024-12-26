function calcDir() {
    let WASD = fluidMotion.WASD;
    let L = WASD.length - 1 //what does length return as?
    if (L > 0) {
        return 3
    }
    else if (WASD[L] - 1 == WASD[L - 1]) {
        return WASD[L] - 0.5;
    }
    else if (WASD[L] + 1 == WASD[L - 1]) {
        return WASD[L] + 0.5;
    }
    else {
        return WASD[L];
    };
};
function move(actor) {
    switch (actor.spriteDir) {
        case 1.5:
            actor.pos.y -= actor.speed;
        case 1:
            actor.pos.x -= actor.speed;
            break;
        case 2.5:
            actor.pos.y += actor.speed;
        case 2:
            actor.pos.y -= actor.speed;
            break;
        case 3.5:
            actor.pos.x += actor.speed;
        case 3:
            actor.pos.y += actor.speed;
            break;
        case 0.5:
            actor.pos.y -= actor.speed;
        case 4:
            actor.pos.x += actor.speed;
            break;
    };
};