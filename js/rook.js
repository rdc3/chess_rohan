class Rook {

    constructor(colour, pos) {

        this.pos = pos
        this.type="rook"
        this.colour = colour
        this.opponentColor = (this.colour == WHITE) ? BLACK : WHITE
        this.image = loadImage("images/blackRook.png")
        this.scale = 0.6;
        if (colour === WHITE) {
            this.image = loadImage("images/whiteRook.png")
        }
        this.possibleNext = [];
        console.log(chessBoard.size)

    }

    recalculatePossibleNext(pieces) {
        console.log('recalculating pos');
        this.possibleNext = [];

        // look for possible moves towards down
        var i = this.pos.x+1;
        while (i < 8) {
            if (this.cannotMoveBeyond(pieces[i][this.pos.y])) break;
            this.possibleNext.push({ x: i, y: this.pos.y, attack: false });
            i++;
        }

        // look for possible moves towards up
        i = this.pos.x-1;
        while (i >= 0) {
            if (this.cannotMoveBeyond(pieces[i][this.pos.y])) break;
            this.possibleNext.push({ x: i, y: this.pos.y, attack: false });
            i--;
        }

        // look for possible moves towards right
        var j = this.pos.y+1;
        while (j < 8) {
            if (this.cannotMoveBeyond(pieces[this.pos.x][j])) break;
            this.possibleNext.push({ x: this.pos.x, y: j, attack: false });
            j++;
        }

        // look for possible moves towards left
        j = this.pos.y-1;
        while (j >= 0) {
            if (this.cannotMoveBeyond(pieces[this.pos.x][j])) break;
            this.possibleNext.push({ x: this.pos.x, y: j, attack: false });
            j--;
        }

        // remove all moves that are outside the chessboard matrix of 8x8
        this.possibleNext = this.possibleNext.filter(p => p.x >= 0 && p.x < 8 && p.y >= 0 && p.y < 8);
        return this.possibleNext
    }
    cannotMoveBeyond(piece) {
        if (piece && piece.colour === this.colour)
            return true;
        if (piece && piece.colour === this.opponentColor) {
            this.possibleNext.push({ x: piece.pos.x, y: piece.pos.y, attack: true });
            return true;
        }
        return false;
    }
    moveTo(pos) {
        if (this.possibleNext.find(canGoTo => canGoTo.x === pos.x && canGoTo.y === pos.y)) {
            this.pos = pos;
            console.log("Moved to position ", pos);
            return true;
        } else {
            console.error("Cannot go to position ", pos);
            return false;
        }
    }

}