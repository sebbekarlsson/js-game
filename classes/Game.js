class Game {
    constructor(ctx) {
        this.gameObjects = [];
        this.level = 0;
        this.score = 0;

        this.ctx = ctx;

        const player = new Player(120, 300, ctx, this);

        this.gameObjects.push(player);


        this.gameObjects.push(new Coin(400, 350, ctx, this));

        // rack upp handen nar ni ser en gul cirkel.

        this.keys = {};

        document.addEventListener("keydown", function(event){
            this.keys[event.key] = true;
        }.bind(this) );

        document.addEventListener("keyup", function(event){
            delete this.keys[event.key];
        }.bind(this) );
    }

    // rita pa skarmen
    draw() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, 640, 480);

        this.gameObjects.forEach(function(obj){
            obj.draw();
        });

        this.drawScore();
    }

    // rack upp handen nar cirkeln ror pa sig och
    // vi inte ser "strecken" bakom langre.

    // rakna ut saker
    update() {
        this.gameObjects.forEach(function(obj){
            obj.update();
        });
        requestAnimationFrame(() => this.update());
        this.draw();
    }

    start() {
        this.update();
    }

    // ta bort `obj` fran gameObjects listan.
    removeObject(obj) {
        this.gameObjects = this.gameObjects.filter(gameObj => gameObj != obj);
    }

    whenCoinRemoved() {
        const x = getRandomNumber(0, 640);
        const y = getRandomNumber(0, 480);
        this.gameObjects.push(new Coin(x, y, ctx, this));
    }

    drawScore() {
        this.ctx.font = "22px Sans-Serif";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(`score: ${this.score}`, 16, 32);

        // rack upp handen nar ni ser score texten.
    }
}