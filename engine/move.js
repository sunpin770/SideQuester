
//from typer, override for move.js, named handle.js
function calcDir() {
	let WASD = SQ.fluidMotion.WASD
	let L = WASD.length - 1;
	if (WASD[L] - 1 == WASD[L - 1]) {
		return WASD[L] - 0.5;
	}
	else if (WASD[L] + 1 == WASD[L - 1]) {
		return WASD[L] + 0.5;
	}
	else {
		return WASD[L];
	};
};
//working:
//A, WA, S, AS, DS
//not working:
//W, WD, D
function move(actor) {
	switch (actor.spriteDir) {
		/*only put breaks after the cardinal directions; the diagonals will fall through and do them too. There may even be a more efficient way to handle this, but I really can't be bothered to figure it out.*/
		case 1.5: //north-west
			actor.pos.y -= actor.speed;
		case 1: //north
			actor.pos.x -= actor.speed;
			break;
		case 2.5: //south-west
			actor.pos.y += actor.speed;
		case 2: //west
			actor.pos.x -= actor.speed;
			break;
		case 3.5: //south-east
			actor.pos.x += actor.speed;
		case 3: //south
			actor.pos.y += actor.speed;
			break;
		case 0.5: //north-east
			actor.pos.y -= actor.speed;
		case 4: //east
			actor.pos.x += actor.speed;
			break;
	};
    console.log(actor.spriteDir)
};
function handle(actor) {
	/*This is the files actual function. the others could be sorted out when they get bigger.*/
    //are we trying to move at all?
    if (SQ.fluidMotion.WASD.length > 0) {
	    reqDir = calcDir();
	    //if we don't need to turn
	    if (reqDir == actor.spriteDir) {
	    	move(actor);
	    }
	    //for now all turns take one frame. eventually when I implement animations I'm going to have to stop using the update() as a crutch and make things happen over multiple frame rates. At that point it may be prudent to make a turn() function, 
	    else {
	    	actor.spriteDir = reqDir % 4;
	    };  
        //debug
        //console.log(SQ.fluidMotion.WASD);
    }
    else {
        actor.spriteDir = 3;
    };
};