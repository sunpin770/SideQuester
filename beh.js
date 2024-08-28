// Use ex.Texture to load the image
const backgroundImageTexture = new ex.Texture('img/prototype_background.png');

// Define the Background class
class Background extends ex.Actor {
    onInitialize(engine) {
        // Ensure the texture is loaded before using it
        backgroundImageTexture.load().then(() => {
            // Convert the texture to a sprite and set it as the actor's graphic
            this.graphics.use(backgroundImageTexture.toSprite());
            this.pos = ex.vec(engine.drawWidth / 2, engine.drawHeight / 2); // Center the background
        }).catch((error) => {
            console.error("Failed to load background texture:", error);
        });
    }
}

// Create a background instance and add it to the scene
const tutorialBackground = new Background();
const tutorialScene = new ex.Scene();
SideQuester.add('tutorial', tutorialScene);
