const mainLoader = new ex.Loader();
var resources = {
    backgroundTutorial: new ex.ImageSource("img/prototype_background.png"),
};
for (let resource in resources) {
    mainLoader.addResource(resource);
}