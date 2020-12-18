var pieces;
var WHITE = 1;
var BLACK = 0;
var chessBoard;
var TURN = WHITE;
this.selected = null;
var gameState= "playing"
function preload() {

}

function setup() {
    createCanvas(windowWidth - 40, windowHeight - 40)



    chessBoard = new Board();
    chessBoard.resetBoard();
}

function draw() {
    if (gameState === "playing") {

        chessBoard.displayBackground();
     }
    else if (gameState === "over") {
        fill("green");
        strokeWeight(10)
        textSize(70);
        textAlign(CENTER)
        text("GAME OVER. "+ ((TURN)?"BLACK":"WHITE") + " wins",chessBoard.size*4,chessBoard.size*4)
     }

    drawSprites();

}

function mouseClicked() {
    
    let y = Math.trunc(mouseX / chessBoard.size);
    let x = Math.trunc(mouseY / chessBoard.size);
    console.log(x, y, mouseX / chessBoard.size, mouseY / chessBoard.size)
    console.log(this.selected)
    if (!this.selected) {
        if (pieces[x][y] && pieces[x][y].colour === TURN) {
            var possibleMoves = pieces[x][y].
                recalculatePossibleNext(pieces)

            console.log('clicked on ', x, y)
            console.log('can move to', possibleMoves)

            chessBoard.highlight(possibleMoves)
            this.selected = { x: x, y: y }
            
        }
    } 
    else {
        if (pieces[this.selected.x][this.selected.y].moveTo({ x: x, y: y })) {
            if (pieces[x][y] && pieces[x][y].type === "king") {
                gameState = "over"
                
            }
            pieces[x][y] = pieces[this.selected.x][this.selected.y]
            pieces[this.selected.x][this.selected.y] = null
            
            TURN = (TURN === WHITE) ? BLACK : WHITE;
        }
        chessBoard.resetHighlight();
        this.selected = null
        
    }
}