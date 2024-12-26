
SQ.add(tutorialBounds[0]);
//SQ.add(tutorialBounds[1])
SQ.add(background1);

SQ.currentScene.camera.strategy.lockToActor(you);
SQ.currentScene.camera.strategy.limitCameraBounds(new ex.BoundingBox(0, 0, 3168, 1632))
SQ.add(mendel)
SQ.add(ita)
SQ.add(chanale)
//SQ.add(mushka)

SQ.add(you);

console.log(backgroundTutorial)
background1.graphics.use(backgroundTutorial.toSprite());
//mushka.actions.moveTo(ex.vec(500, 249), 50)
