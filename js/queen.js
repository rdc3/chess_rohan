class Queen {

    constructor(colour, pos) {
    
        this.pos = pos
        this.type="queen"
        this.colour = colour
        this.opponentColor = (this.colour == WHITE) ? BLACK : WHITE
        this.image = loadImage("images/blackQueen.png")
    
        if (colour === WHITE) {
            this.image = loadImage("images/whiteQueen.png")
        }
        this.possibleNext = []
    
    }
    
    recalculatePossibleNext() {
        console.log('recalculating pos for queen');
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

        i = this.pos.x + 1, j = this.pos.y + 1;
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
            console.log("Queen moved to position ", pos);
            return true;
        } else {
            console.error("Queen cannot go to position ", pos);
            return false;
        }
    }
    
}