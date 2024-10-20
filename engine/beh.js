//add background
const background1 = new Background(3200, 4400);



//add player
const you = new Player(622, 568, ex.Color.Green, 2.5);
you.on('collisionStart', () => {console.log("collided")});

//ad npcs
const mendel = new NPC(553, 313);
const ita = new NPC(800, 1200, ex.Color.Black);
const chanale = new NPC(800, 800, ex.Color.Blue);
const mushka = new NPC(189, 249, ex.Color.Yellow);
