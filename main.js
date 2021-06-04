const canvas = document.getElementById("canvas");
// context
const ctx = canvas.getContext("2d");



const game = new Game(ctx);

game.start();

// rack upp handen nar ni ser cirkeln.