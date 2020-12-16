class Rook {

    constructor(colour, pos) {

        this.pos = pos
        this.colour = colour
        this.image = loadImage("images/blackRook.png")
        // this.sprite = createSprite(pos.x * chessBoard.size + chessBoard.size / 2, pos.y * chessBoard.size + chessBoard.size / 2, 10, 10)
        // this.sprite.addImage(this.image);
        this.scale = 0.6;
        if (colour === WHITE) {
            this.image = loadImage("images/whiteRook.png")
        }

        this.alive = true
        this.possiblenNext = null;
        console.log(chessBoard.size)

    }

    recalculatePossibleNext() {
        console.log('recalculating pos');
        this.possiblenNext = [];
        for (var i = 0; i < 8; i++) {
            if (i !== this.pos.x)
                this.possiblenNext.push({ x: i, y: this.pos.y });
        }
        for (var i = 0; i < 8; i++) {
            if (i !== this.pos.y)
                this.possiblenNext.push({ x: this.pos.x, y: i })
        }
        this.possiblenNext = this.possiblenNext.filter(p => p.x >= 0 && p.x < 8 &&  p.y >= 0 && p.y < 8)
    }
    filterPossibleNext(arrayPos){}
    possibleNextPositions() {
        return this.possiblenNext;
    }

    moveTo(pos) {
        if (this.possiblenNext.find(canGoTo => canGoTo.x === pos.x && canGoTo.y === pos.y)) {
            this.pos = pos;
            console.log("Moved to position ", pos);
            return true;
        } else {
            console.error("Cannot go to position ", pos);
            return false;
        }
    }

}