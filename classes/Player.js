class Player extends GameObject {
    constructor(x, y, ctx, game) {
        super(x, y, ctx);
        this.game = game;
        this.radius = 32;
        this.width = this.radius;
        this.height = this.width;
    }

    draw() {
        this.ctx.drawImage(
            SHIP_IMAGE,     // bild vi vill rita
            this.x,             // horisontell koordinat
            this.y,             // vertikal koordinat
            this.width,         // bredd
            this.height         // hojd
        );
    }


    update() {
        // right
        if (this.game.keys["d"]) {
            this.x += 5;
        }

        // left
        if (this.game.keys["a"]) {
            this.x -= 5;
        }

        // up
        if (this.game.keys["w"]) {
            this.y -= 5;
        }

        // down
        if (this.game.keys["s"]) {
            this.y += 5;
        }

        // rack upp handen nar ni tappar poang
        // efter att nuddat en asteroid.
        this.game.gameObjects.forEach(function(gameObject){

            if(gameObject.constructor.name === "Enemy") {
                
                if (this.isTouching(gameObject)) {
                    this.game.whenHitAsteroid(this.x, this.y, gameObject);
                }
            }
        }.bind(this)   );
    }
}