class Knight {

    constructor (colour,pos)  {
    
    this.pos=pos 
    this.colour=colour 
    this.image=loadImage ("images/blackKnight.png")
    
    if(colour===WHITE){
        this.image=loadImage ("images/whiteKnight.png")
    }
    
    this.alive=true 
    this.posiblenNext =[]
    }
    
    recalculatePossibleNext() {
        console.log('recalculating pos for knight');
        this.possiblenNext = [];
        this.possiblenNext.push({ x: this.pos.x-2, y: this.pos.y+1 });
        this.possiblenNext.push({ x: this.pos.x-2, y: this.pos.y-1 });
        this.possiblenNext.push({ x: this.pos.x-1, y: this.pos.y+2 });
        this.possiblenNext.push({ x: this.pos.x-1, y: this.pos.y-2 });
        this.possiblenNext.push({ x: this.pos.x+2, y: this.pos.y+1 });
        this.possiblenNext.push({ x: this.pos.x+2, y: this.pos.y-1 });
        this.possiblenNext.push({ x: this.pos.x+1, y: this.pos.y+2 });
        this.possiblenNext.push({ x: this.pos.x+1, y: this.pos.y-2 });
        this.possiblenNext = this.possiblenNext.filter(p => p.x >= 0 && p.x < 8 &&  p.y >= 0 && p.y < 8)
    }
    possibleNextPositions() {
        return this.possiblenNext;
    }

    moveTo(pos) {
        if (this.possiblenNext.find(canGoTo => canGoTo.x === pos.x && canGoTo.y === pos.y)) {
            this.pos = pos;
            console.log("Knight moved to position ", pos);
            return true;
        } else {
            console.error("Knight cannot go to position ", pos);
            return false;
        }
    }
    
    
    }