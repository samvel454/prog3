
class Grasseater extends Base {
    constructor(x, y) {
        super(x,y)
        this.multiply = 0;
        this.energy = 8;
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
    getNewCoordinates() {
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
    }

    chooseCell( charecter ) {
        this.getNewCoordinates();
        return super.chooseCell(charecter);
    }



    move() {


        var emptyCells = super.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            this.x = newX;
            this.y = newY;
        }
        this.energy--;

        //heto avelacru meeater mej
        if (this.energy <= 0) {
            this.die();
        }

    }
    eat() {
        var emptyCells = super.chooseCell(1);
        var newCell = random(emptyCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            var x = newCell[0];
            var y = newCell[1];

            matrix[y][x] = 2;
            this.x = x;
            this.y = y;
            for (var i in grrasArr) {
                if (x == grrasArr[i].x && y == grrasArr[i].y) {
                    grrasArr.splice(i, 1);
                    break;
                }
            }
            this.energy++;

            if (currentSeson ==  exanak[1] ) {
                 if (this.energy += 10) {
                    this.mul();
                    this.energy = 3;
                   


                }
             }
             if (currentSeson ==  exanak[2] ) {
                if (this.energy 
                    +=5) {
                   this.mul();
                   this.energy = 15;
                  


               }
            }
       
            else if (currentSeson ==  exanak[0] ) {
                if (this.energy += 0) {
                   this.mul();
                   this.energy = 2;
                  


               }
            }
            else if (currentSeson ==  exanak[3] ) {
                if (this.energy += 3) {
                   this.mul();
                   this.energy = 2;
                  


               }
            }

        }
        else {
            this.move();
        }
    }
    mul() {
        var emptyCells = super.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            var newgrasseater = new Grasseater(newX, newY, 1);
            grasseat.push(newgrasseater);
        }
    }
    die() {
        for (var i in grasseat) {
            if (this.x == grasseat[i].x && this.y == grasseat[i].y) {
                grasseat.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }

}