class Board {
    constructor() {
        this.size = width < height ? width : height;

        // this.sprite = createSprite(this.size/2,this.size/2,this.size,this.size)
        // this.sprite.visible=false;
        this.size = this.size / 8
        this.highlightPos=[]
    }
    // displayBackground() {
        // var size = width < height ? width : height;
        // size = size / 8
        // for (var i = 0; i < 8; i++) {
        //     for (var j = 0; j < 8; j++) {
        //         if ((i + j) % 2 == 0) fill(108, 157, 158);
        //         else fill(171, 221, 178);
        //         rect(i * size, j * size, size, size)
        //         if (pieces[j][i] != null)
        //             image((pieces[j][i]).image, i * size, j * size, size, size);
        //     }
        // }
    // }
    highlight(pos) {
        if (this.highlightPos.length>0) this.highlightPos=[]
        else  this.highlightPos = pos;
    }
    displayBackground() {
        
        var size = width < height ? width : height;
        size = size / 8
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                var highlight = (this.highlightPos) ? this.highlightPos.find((p) => { return p.y === i && p.x === j }) : null
                if (highlight) {
                    fill(255, 218, 0)
                    if (highlight.attack) {
                        fill(255, 0, 0)
                    }
                }
                else if ((i + j) % 2 == 0) fill(108, 157, 158);
                else fill(171, 221, 178);
                rect(i * size, j * size, size, size)
                if (pieces[j][i] != null)
                    image((pieces[j][i]).image, i * size, j * size, size, size);
            }
        }
    }
    resetHighlight(){
        this.highlightPos = []
    }
    resetBoard() {

        pieces = [[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]]

        pieces[0][0] = new Rook(BLACK, { x: 0, y: 0 });
        pieces[0][1] = new Knight(BLACK, { x: 0, y: 1 });
        pieces[0][2] = new Bishop(BLACK, { x: 0, y: 2 });
        pieces[0][3] = new Queen(BLACK, { x: 0, y: 3 });
        pieces[0][4] = new King(BLACK, { x: 0, y: 4 });
        pieces[0][5] = new Bishop(BLACK, { x: 0, y: 5 });
        pieces[0][6] = new Knight(BLACK, { x: 0, y: 6 });
        pieces[0][7] = new Rook(BLACK, { x: 0, y: 7 });
        pieces[1][0] = new Pawn(BLACK, { x: 1, y: 0 });
        pieces[1][1] = new Pawn(BLACK, { x: 1, y: 1 });
        pieces[1][2] = new Pawn(BLACK, { x: 1, y: 2 });
        pieces[1][3] = new Pawn(BLACK, { x: 1, y: 3 });
        pieces[1][4] = new Pawn(BLACK, { x: 1, y: 4 });
        pieces[1][5] = new Pawn(BLACK, { x: 1, y: 5 });
        pieces[1][6] = new Pawn(BLACK, { x: 1, y: 6 });
        pieces[1][7] = new Pawn(BLACK, { x: 1, y: 7 });

        pieces[7][0] = new Rook(WHITE, { x: 7, y: 0 });
        pieces[7][1] = new Knight(WHITE, { x: 7, y: 1 });
        pieces[7][2] = new Bishop(WHITE, { x: 7, y: 2 });
        pieces[7][3] = new Queen(WHITE, { x: 7, y: 3 });
        pieces[7][4] = new King(WHITE, { x: 7, y: 4 });
        pieces[7][5] = new Bishop(WHITE, { x: 7, y: 5 });
        pieces[7][6] = new Knight(WHITE, { x: 7, y: 6 });
        pieces[7][7] = new Rook(WHITE, { x: 7, y: 7 });
        pieces[6][0] = new Pawn(WHITE, { x: 6, y: 0 });
        pieces[6][1] = new Pawn(WHITE, { x: 6, y: 1 });
        pieces[6][2] = new Pawn(WHITE, { x: 6, y: 2 });
        pieces[6][3] = new Pawn(WHITE, { x: 6, y: 3 });
        pieces[6][4] = new Pawn(WHITE, { x: 6, y: 4 });
        pieces[6][5] = new Pawn(WHITE, { x: 6, y: 5 });
        pieces[6][6] = new Pawn(WHITE, { x: 6, y: 6 });
        pieces[6][7] = new Pawn(WHITE, { x: 6, y: 7 });
    }

    display() {

    }

    clickedOn(x, y) {
        console.log("clicked at ", x, y);
    }



}