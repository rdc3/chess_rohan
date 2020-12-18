class Bishop {

    constructor(colour, pos) {

        this.pos = pos
        this.type="bishop"
        this.colour = colour
        this.opponentColor = (this.colour == WHITE) ? BLACK : WHITE
        this.image = loadImage("images/blackBishop.png")

        if (colour === WHITE) {
            this.image = loadImage("images/whiteBishop.png")
        }

        this.possibleNext = []

    }

    recalculatePossibleNext() {
        console.log('recalculating pos for bishop');
        this.possibleNext = [];

        // look for possible moves towards bottom right
        var i = this.pos.x + 1, j = this.pos.y + 1;
        while (i < 8 && j < 8) {
            if (this.cannotMoveBeyond(pieces[i][j])) break;
            this.possibleNext.push({ x: i, y: j, attack: false });
            i++;
            j++;
        }

        // look for possible moves towards top left
        i = this.pos.x - 1, j = this.pos.y - 1;
        while (i >=0  && j >= 0) {
            if (this.cannotMoveBeyond(pieces[i][j])) break;
            this.possibleNext.push({ x: i, y: j, attack: false });
            i--;
            j--;
        }

        // look for possible moves towards bottom left
        i = this.pos.x + 1, j = this.pos.y - 1;
        while (i < 8  && j >= 0) {
            if (this.cannotMoveBeyond(pieces[i][j])) break;
            this.possibleNext.push({ x: i, y: j, attack: false });
            i++;
            j--;
        }

        // look for possible moves towards top right
        i = this.pos.x - 1, j = this.pos.y + 1;
        while (i >= 0 && j < 8) {
            if (this.cannotMoveBeyond(pieces[i][j])) break;
            this.possibleNext.push({ x: i, y: j, attack: false });
            i--;
            j++;
        }

        // remove all moves that are outside the chessboard matrix of 8x8
        this.possibleNext = this.possibleNext.filter(p => p.x >= 0 && p.x < 8 && p.y >= 0 && p.y < 8);
        return this.possibleNext;
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
            console.log("Bishop moved to position ", pos);
            return true;
        } else {
            console.error("Bishop cannot go to position ", pos);
            return false;
        }
    }

}