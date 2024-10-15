SQ.start(mainLoader);
SQ.add(background1);
SQ.add(you);
SQ.currentScene.camera.strategy.lockToActor(you);
SQ.currentScene.camera.strategy.limitCameraBounds(new ex.BoundingBox(0, 0, 4400, 3600))
SQ.add(mendel)