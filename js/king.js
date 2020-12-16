class King {

    constructor (colour,pos)  {
    
    this.pos=pos 
    this.colour=colour 
    if(colour===BLACK){
    this.image=loadImage ("images/blackKing.png")
    }
    if(colour===WHITE){
        this.image=loadImage ("images/whiteKing.png")
    }
    
    this.alive=true 
    this.posiblenNext =[]
    
    }
    
    recalculatePossibleNext() {
        console.log('recalculating pos for king');
        this.possiblenNext = [];
        this.possiblenNext.push({ x: this.pos.x+1, y: this.pos.y+1 });
        this.possiblenNext.push({ x: this.pos.x+1, y: this.pos.y });
        this.possiblenNext.push({ x: this.pos.x+1, y: this.pos.y-1 });

        this.possiblenNext.push({ x: this.pos.x-1, y: this.pos.y-1 });
        this.possiblenNext.push({ x: this.pos.x-1, y: this.pos.y });
        this.possiblenNext.push({ x: this.pos.x-1, y: this.pos.y+1 });

        this.possiblenNext.push({ x: this.pos.x, y: this.pos.y+1 });
        this.possiblenNext.push({ x: this.pos.x, y: this.pos.y-1 });
        this.possiblenNext = this.possiblenNext.filter(p => p.x >= 0 && p.x < 8 &&  p.y >= 0 && p.y < 8)
    }
    possibleNextPositions() {
        return this.possiblenNext;
    }

    moveTo(pos) {
        if (this.possiblenNext.find(canGoTo => canGoTo.x === pos.x && canGoTo.y === pos.y)) {
            this.pos = pos;
            console.log("king moved to position ", pos);
            return true;
        } else {
            console.error("king cannot go to position ", pos);
            return false;
        }
    }
    
    
    
    }