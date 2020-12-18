class Pawn {

    constructor(colour, pos) {

        this.pos = pos
        this.colour = colour
        this.opponentColor = (this.colour == WHITE) ? BLACK : WHITE
        this.image = loadImage("images/blackPawn.png")
        this.type="pawn"
        if (colour === WHITE) {
            this.image = loadImage("images/whitePawn.png")
        }
        this.possibleNext = []
        this.stepSingle = (this.colour == WHITE) ? -1 : 1
        this.stepDouble = (this.colour == WHITE) ? -2 : 2

    }
    recalculatePossibleNext(pieces) {
        console.log('recalculating pos for pawn');
        this.possibleNext = [];
        var isInitial = (this.colour === WHITE) ? this.pos.x === 6 : this.pos.x === 1;
        // can take 1 step if there are no pieces in front
        var canTake1Step = (pieces[this.pos.x + this.stepSingle][this.pos.y]) ? false : true
        // can take 2 steps if there are no pieces there
        var canTake2Steps = (isInitial && pieces[this.pos.x + this.stepDouble][this.pos.y]) ? false : true
        if (canTake1Step) {
            if (isInitial && canTake2Steps) {
                this.possibleNext.push({ x: this.pos.x + this.stepDouble, y: this.pos.y, attack: false });
            }
            this.possibleNext.push({ x: this.pos.x + this.stepSingle, y: this.pos.y, attack: false });
            this.possibleNext = this.possibleNext.filter(p => p.x >= 0 && p.x < 8 && p.y >= 0 && p.y < 8);
        }
        this.canAttack(pieces);
        return this.possibleNext;
    }

    canAttack(pieces) {
        //attack the opponent on the left side of the pawn. leftmost column is skipped
        if (this.pos.y > 0) {
            if (pieces[this.pos.x + this.stepSingle][this.pos.y - 1] && pieces[this.pos.x + this.stepSingle][this.pos.y - 1].colour == this.opponentColor) {
                this.possibleNext.push({ x: this.pos.x + this.stepSingle, y: this.pos.y - 1, attack: true });
            }
        }
        
        //attack the opponent on the right side of the pawn. rightmost column is skipped
        if (this.pos.y < 7) {
            if (pieces[this.pos.x + this.stepSingle][this.pos.y + 1] && pieces[this.pos.x + this.stepSingle][this.pos.y + 1].colour == this.opponentColor) {
                this.possibleNext.push({ x: this.pos.x + this.stepSingle, y: this.pos.y + 1, attack: true });
            }
        }
    }

    moveTo(pos) {
        if (this.possibleNext.find(canGoTo => canGoTo.x === pos.x && canGoTo.y === pos.y)) {
            this.pos = pos;
            console.log("Pawn moved to position ", pos);
            return true;
        }
        console.error("Pawn cannot go to position ", pos, this.possibleNext);
        return false;
    }



}