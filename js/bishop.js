class Bishop {

    constructor (colour,pos)  {
    
    this.pos=pos 
    this.colour=colour 
    this.image=loadImage ("images/blackBishop.png")
    
    if(colour===WHITE){
        this.image=loadImage ("images/whiteBishop.png")
    }
    
    this.alive=true 
    this.posiblenNext =[]
    
    }
    
    recalculatePossibleNext() {
        console.log('recalculating pos for bishop');
        this.possiblenNext = [];
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                if(i===j){
                    this.possiblenNext.push({ x: this.pos.x+i, y: this.pos.y+j });
                    this.possiblenNext.push({ x: this.pos.x+i, y: this.pos.y-j });
                    this.possiblenNext.push({ x: this.pos.x-i, y: this.pos.y+j });
                    this.possiblenNext.push({ x: this.pos.x-i, y: this.pos.y-j });
                }
            }
        }
        this.possiblenNext = this.possiblenNext.filter(p => p.x >= 0 && p.x < 8 &&  p.y >= 0 && p.y < 8)
    }
    possibleNextPositions() {
        return this.possiblenNext;
    }

    moveTo(pos) {
        if (this.possiblenNext.find(canGoTo => canGoTo.x === pos.x && canGoTo.y === pos.y)) {
            this.pos = pos;
            console.log("Bishop moved to position ", pos);
            return true;
        } else {
            console.error("Bishop cannot go to position ", pos);
            return false;
        }
    }
    
    }