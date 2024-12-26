//new file input.js right before move.js
SQ.fluidMotion = {
	WASD: [],
	arrowKeys: [],
	numKeys: [],
	yWASD: (key) => {this.WASD.push(key)},
	nWASD: (key) => {this.WASD = this.WASD.filter(item => item !== key)},
};
function onSpecific(key, callback) {
	SQ.input.keyboard.on('press', (evt) => {
		if (evt.key == key) {callback()};
		//change to ===?
	});
};
function offSpecific(key, callback) {
	SQ.input.keyboard.on('release', (evt) => {
		if (evt.key == key) {callback()};
	});
};
function calcInput() {
	/*WASD*/
	//we need four seperate ones for fluidMotion, v'dai l'meiven
	onSpecific('w', () => {fluidMotion.yWASD(1)});
	onSpecific('a', () => {fluidMotion.yWASD(2)});
	onSpecific('s', () => {fluidMotion.yWASD(3)});
	onSpecific('d', () => {fluidMotion.yWASD(4)});
	offSpecific('w', () => {fluidMotion.nWASD(1)});
	offSpecific('a', () => {fluidMotion.nWASD(2)});
	offSpecific('s', () => {fluidMotion.nWASD(3)});
	offSpecific('d', () => {fluidMotion.nWASD(4)});
	//I guess we could make this two events only if they can trigger more than once at the same time. This probably causes significant lag in the long run.
};