class Coin extends GameObject {
    constructor(x, y, ctx, game) {
        super(x, y, ctx);
        this.game = game;
        this.radius = 8;
        this.width = this.radius * 2;
        this.height = this.width;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "yellow";
        this.ctx.stroke();
    }


    update() {
        this.game.gameObjects.forEach(function(gameObject){
            if(gameObject.constructor.name === "Player") {
                
                /*================================ y ===============================*/

                // ar myntets "huvud/ovansida" ovanfor spelarens "fot"?
                if (this.y - this.radius <= gameObject.y + gameObject.radius) {

                    // ar myntets "fot" nedanfor spelarens "huvud/ovansida"?
                    if (this.y + this.radius >= gameObject.y - gameObject.radius) {
                      

                        /* ========================= x ================================ */
               
                        if (this.x - this.radius <= gameObject.x + gameObject.radius) {
                            if (this.x + this.radius >= gameObject.x - gameObject.radius) {
                                this.game.whenCoinRemoved();
                                this.game.removeObject(this);
                            }
                        }

                    }
                }

                // rack upp handen nar ni kan "plocka" upp myntet.
            }
        }.bind(this)   );
    }
}