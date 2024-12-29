//new file input.js right before move.js
SQ.fluidMotion = {
	WASD: [],
	arrowKeys: [],
	numKeys: [],
	yWASD: (key) => {SQ.fluidMotion.WASD.push(key)},
	nWASD: (key) => {
        //this.WASD = this.WASD.filter(item => item !== key)
        SQ.fluidMotion.WASD.splice(SQ.fluidMotion.WASD.indexOf(key), 1);
        },
};
//function onSpecific(key, callback) {
//	SQ.input.keyboard.on('press', (evt) => {
//		if (evt.key == key) {callback()};
//		//change to ===?
//	});
//};
//function offSpecific(key, callback) {
//	SQ.input.keyboard.on('release', (evt) => {
//		if (evt.key == key) {callback()};
//	});
//};
//function calcInput() {
//	/*WASD*/
//	//we need four seperate ones for fluidMotion, v'dai l'meiven
//	onSpecific('KeyW', () => {SQ.fluidMotion.yWASD(1)});
//	onSpecific('KeyA', () => {SQ.fluidMotion.yWASD(2)});
//	onSpecific('KeyS', () => {SQ.fluidMotion.yWASD(3)});
//	onSpecific('KeyD', () => {SQ.fluidMotion.yWASD(4)});
//	offSpecific('KeyW', () => {SQ.fluidMotion.nWASD(1)});
//	offSpecific('KeyA', () => {SQ.fluidMotion.nWASD(2)});
//	offSpecific('KeyS', () => {SQ.fluidMotion.nWASD(3)});
//	offSpecific('KeyD', () => {SQ.fluidMotion.nWASD(4)});
//	//I guess we could make this two events only if they can trigger more than once at the same time. This probably causes significant lag in the long run.
//};
function calcInput() {
    SQ.input.keyboard.on('press', (evt) => {
        switch (evt.key) {
            case 'KeyW': SQ.fluidMotion.yWASD(1); break;
            case 'KeyA': SQ.fluidMotion.yWASD(2); break;
            case 'KeyS': SQ.fluidMotion.yWASD(3); break;
            case 'KeyD': SQ.fluidMotion.yWASD(4); break;
        };
    });
    SQ.input.keyboard.on('release', (evt) => {
        switch (evt.key) {
            case 'KeyW': SQ.fluidMotion.nWASD(1); break;
            case 'KeyA': SQ.fluidMotion.nWASD(2); break;
            case 'KeyS': SQ.fluidMotion.nWASD(3); break;
            case 'KeyD': SQ.fluidMotion.nWASD(4); break;
        };
    });
};