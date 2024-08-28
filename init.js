// Create the loader and add the background image texture to be loaded
const loader = new ex.Loader([backgroundImageTexture]);

SideQuester.start(loader).then(() => {
    // Once loaded, switch to the tutorial scene
    SideQuester.goToScene('tutorial');
    SideQuester.currentScene.add(tutorialBackground);
});
