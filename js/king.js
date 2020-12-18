class King {

    constructor(colour, pos) {

        this.pos = pos
        this.type="king"
        this.colour = colour
        this.opponentColor = (this.colour == WHITE) ? BLACK : WHITE
        if (colour === BLACK) {
            this.image = loadImage("images/blackKing.png")
        }
        if (colour === WHITE) {
            this.image = loadImage("images/whiteKing.png")
        }
        this.possibleNext = []

    }

    recalculatePossibleNext(pieces) {
        console.log('recalculating pos for king');
        this.possibleNext = [];

        var i = this.pos.x + 1;
        var j = this.pos.y + 1;
        if (this.withinBounds (i,j) && !this.cannotMoveBeyond(pieces[i][j]))
            this.possibleNext.push({ x: i, y: j, attack: false });

        i = this.pos.x + 1;
        j = this.pos.y;
        if (this.withinBounds (i,j) && !this.cannotMoveBeyond(pieces[i][j]))
            this.possibleNext.push({ x: i, y: j, attack: false });

        i = this.pos.x + 1;
        j = this.pos.y - 1;
        if (this.withinBounds (i,j) && !this.cannotMoveBeyond(pieces[i][j]))
            this.possibleNext.push({ x: i, y: j, attack: false });

        i = this.pos.x - 1;
        j = this.pos.y - 1;
        if (this.withinBounds (i,j) && !this.cannotMoveBeyond(pieces[i][j]))
            this.possibleNext.push({ x: i, y: j, attack: false });

        i = this.pos.x - 1;
        j = this.pos.y;
        if (this.withinBounds (i,j) && !this.cannotMoveBeyond(pieces[i][j]))
            this.possibleNext.push({ x: i, y: j, attack: false });

        i = this.pos.x - 1;
        j = this.pos.y + 1;
        if (this.withinBounds (i,j) && !this.cannotMoveBeyond(pieces[i][j]))
            this.possibleNext.push({ x: i, y: j, attack: false });

        i = this.pos.x;
        j = this.pos.y + 1;
        if (this.withinBounds (i,j) && !this.cannotMoveBeyond(pieces[i][j]))
            this.possibleNext.push({ x: i, y: j, attack: false });

        i = this.pos.x;
        j = this.pos.y - 1;
        if (this.withinBounds (i,j) && !this.cannotMoveBeyond(pieces[i][j]))
            this.possibleNext.push({ x: i, y: j, attack: false });


        this.possibleNext = this.possibleNext.filter(p => p.x >= 0 && p.x < 8 && p.y >= 0 && p.y < 8);
        return this.possibleNext;
    }
    withinBounds(x, y) {
        return x >= 0 && x < 8 && y >= 0 && y < 8
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
            console.log("king moved to position ", pos);
            return true;
        } else {
            console.error("king cannot go to position ", pos);
            return false;
        }
    }



}