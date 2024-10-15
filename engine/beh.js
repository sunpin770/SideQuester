
const background1 = new Background(3200, 4400, '/img/prototype_background.png');
const you = new Player(1000, 1000);
const mendel = new NPC(1200, 1200);


you.body.collisionType = ex.CollisionType.None;