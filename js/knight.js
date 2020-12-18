class Knight {

    constructor(colour, pos) {

        this.pos = pos
        this.type = "knight"
        this.colour = colour
        this.opponentColor = (this.colour == WHITE) ? BLACK : WHITE
        this.image = loadImage("images/blackKnight.png")

        if (colour === WHITE) {
            this.image = loadImage("images/whiteKnight.png")
        }
        this.possibleNext = []
    }

    recalculatePossibleNext(pieces) {
        console.log('recalculating pos for knight');
        this.possibleNext = [];
        this.possibleNext.push({ x: this.pos.x - 2, y: this.pos.y + 1, attack: false });
        this.possibleNext.push({ x: this.pos.x - 2, y: this.pos.y - 1, attack: false });
        this.possibleNext.push({ x: this.pos.x - 1, y: this.pos.y + 2, attack: false });
        this.possibleNext.push({ x: this.pos.x - 1, y: this.pos.y - 2, attack: false });
        this.possibleNext.push({ x: this.pos.x + 2, y: this.pos.y + 1, attack: false });
        this.possibleNext.push({ x: this.pos.x + 2, y: this.pos.y - 1, attack: false });
        this.possibleNext.push({ x: this.pos.x + 1, y: this.pos.y + 2, attack: false });
        this.possibleNext.push({ x: this.pos.x + 1, y: this.pos.y - 2, attack: false });
        this.possibleNext = this.possibleNext.filter(p => p.x >= 0 && p.x < 8 && p.y >= 0 && p.y < 8);
        this.canAttack(pieces);
        this.cannotMoveTo();
        return this.possibleNext;
    }
    canAttack(pieces) {
        this.possibleNext.forEach(p => {
            if (pieces[p.x][p.y] && pieces[p.x][p.y].colour === this.opponentColor) {
                p.attack = true
            }
        })
    }
    cannotMoveTo() {
        this.possibleNext = this.possibleNext.filter(p => {
            if (pieces[p.x][p.y] && pieces[p.x][p.y].colour === this.colour) {
                return false
            }
            return true
        })
    }
    moveTo(pos) {
        if (this.possibleNext.find(canGoTo => canGoTo.x === pos.x && canGoTo.y === pos.y)) {
            this.pos = pos;
            console.log("Knight moved to position ", pos);
            return true;
        } else {
            console.error("Knight cannot go to position ", pos);
            return false;
        }
    }


}