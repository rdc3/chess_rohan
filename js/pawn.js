class Pawn {

    constructor (colour,pos)  {
    
    this.pos=pos 
    this.colour=colour 
    this.image=loadImage ("images/blackPawn.png")
    
    if(colour===WHITE){
        this.image=loadImage ("images/whitePawn.png")
    }
    
    this.alive=true 
    this.posiblenNext =[]
    
    }
    recalculatePossibleNext() {
        console.log('recalculating pos for pawn');
        this.possiblenNext = [];
        if (this.colour===WHITE){
            if(this.pos.x===6) {
                this.possiblenNext.push({ x: this.pos.x-2, y: this.pos.y });
            }
            this.possiblenNext.push({ x: this.pos.x-1, y: this.pos.y });
        }
        else {
            if(this.pos.x===1) {
                this.possiblenNext.push({ x: this.pos.x+2, y: this.pos.y });
            }
            this.possiblenNext.push({ x: this.pos.x+1, y: this.pos.y });
        }
        this.possiblenNext = this.possiblenNext.filter(p => p.x >= 0 && p.x < 8 &&  p.y >= 0 && p.y < 8)
    }
    possibleNextPositions() {
        return this.possiblenNext;
    }

    moveTo(pos) {
        if (this.possiblenNext.find(canGoTo => canGoTo.x === pos.x && canGoTo.y === pos.y)) {
            this.pos = pos;
            console.log("Pawn moved to position ", pos);
            return true;
        }
        console.error("Pawn cannot go to position ", pos, this.possiblenNext);
        return false;
    }
    
    
    
    }