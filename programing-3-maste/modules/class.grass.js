var Base = require("./class.base");

module.exports = class Grass extends Base {
    constructor(x, y) {
      super(x,y);
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
        //hishi grrasArr gri ayspes
    }
    chooseCell(character) {
        return super.chooseCell(character);
    }//hishi grrasArr gri ayspes
    mul() {
        if (currentSeson ==  exanak[1] ) {
           this.multiply+=2;
        }
       else if (currentSeson ==  exanak[0] ) {
            this.multiply+=1;
         }
         else if (currentSeson ==  exanak[3] ) {
            this.multiply+=4;
         }
         else if (currentSeson ==  exanak[2] ) {
            this.multiply+=2;
         }
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 1) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, 1);
            grrasArr.push(newGrass);
            this.multiply = 0;
        }
    }
    //hishi grrasArr gri ayspes
}
