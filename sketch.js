var pieces;
var WHITE = 1;
var BLACK = 0;
var chessBoard;
var TURN = WHITE;
var MOVEINPROGRESS = false;
this.selected = null;

function preload() {

}

function setup() {
    createCanvas(windowWidth - 40, windowHeight - 40)



    chessBoard = new Board();
    chessBoard.resetBoard();
}

function draw() {


    chessBoard.displayBackground();

    drawSprites();

}

function mouseClicked(e) {
    let y = Math.trunc(e.clientX / chessBoard.size);
    let x = Math.trunc(e.clientY / chessBoard.size);
    if (!this.selected) {
        if (pieces[x][y] && pieces[x][y].colour === TURN) {
            pieces[x][y].
                recalculatePossibleNext()


            console.log('clicked on ', x, y)
            console.log('can move to', pieces[x][y].possibleNextPositions())
            pieces[x][y].possibleNextPositions().filter(
                p => pieces[p.x][p.y] !== null
            )
            chessBoard.highlight(pieces[x][y].possibleNextPositions())
            this.selected = { x: x, y: y }
            MOVEINPROGRESS = true;
        }
    } else {
        if (pieces[this.selected.x][this.selected.y].moveTo({ x: x, y: y })) {
            pieces[x][y] = pieces[this.selected.x][this.selected.y]
            pieces[this.selected.x][this.selected.y] = null
            MOVEINPROGRESS = false;
        }
        chessBoard.resetHighlight();
        this.selected = null
        if (!MOVEINPROGRESS)
            {TURN = (TURN === WHITE) ? BLACK : WHITE;}
    }
    // chessBoard.clickedOn(mouseX,mouseY);
}