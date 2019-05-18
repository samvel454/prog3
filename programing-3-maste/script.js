


var matrix = [];
var n = 40;
var side = 20;
//xot
var grrasArr = [];
//xotaker
var grasseat = [];
//msaker
var meateater = [];
//vorsord
var hunter = [];
var mine = [];
var mak =[];

var days = 0;
var dd = document.getElementById("weather");



var exanak = ["Ձմեռ","Գարուն", "Ամառ", "Աշուն", "Ձմեռ"];
var days = prompt("Գրել եղանակը ըստ տարվա օրերի 1-59 `Ձմեռ,  60-151` Գարուն , 152-243՝ Ամառ, 244-334 ՝Աշուն, 335-365` Ձմեռ ");
var currentSeson = "";

days = parseInt(days);
console.log(meateater)



// var matrix = [
   
//     [0,3,0,0,0, 0],
//     [0,4,4,4,4, 4]
// ];


function setup() {
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < n; x++) {
            var k = random([ 0,0, 0, 3, 2, 2, 2, 0, 0, 0,0,0, 1, 1, 1, 1, 1, 3, 2, 2,1,1,1,1,1,1,1
            ]);
            matrix[y][x] = k;
        }
    }
    for(var i = 0; i< 20; i++){
        var y =  Math.floor(random(n));
        var x =  Math.floor(random(n));
        matrix[y][x]=4;
    }
    
    for(var i = 0; i< 5; i++){
        var y =  Math.floor(random(n));
        var x =  Math.floor(random(n));
        matrix[y][x]=5;
    }




    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    //xot
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grrasArr.push(new Grass(x, y));

            }
        }

    }

    //xotaker
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                grasseat.push(new Grasseater(x, y));

            }
        }

    }


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 3) {
                meateater.push(new Meateater(x, y));

            }
        }

    }

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 4) {
                hunter.push(new Hunter(x, y));

            }
        }

    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 5) {
                mine.push(new Mine(x, y));

            }
        }

    }
    // for (var y = 0; y < matrix.length; y++) {
    //     for (var x = 0; x < matrix[y].length; x++) {
    //         if (matrix[y][x] == 6) {
    //             mak.push(new Mak(x, y));

    //         }
    //     }

    // }


}
function draw() {

    if ((days>=1 && days<60) || (days>=335 && days<366)) {
        currentSeson=exanak[0];

    }
    else if(days>=60 && days < 152) {
        currentSeson =exanak[1];
        console.log("60")

    }
    else if (days >= 152 && days <244) {
        currentSeson = exanak[2];

    }
    else if (days >=244 && days<335) {
        currentSeson = exanak[3];

    }
    else if (days >365) {
        days=1;

    }

    days++

    console.log(currentSeson, days)
    dd.innerHTML = currentSeson;
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            //.xot
            if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                if (currentSeson ==  exanak[0] ) {
                    fill("white");
                }
                else if (currentSeson ==  exanak[1] ) {
                    fill("green");
                }
                else if (currentSeson ==  exanak[2] ) {
                    fill("green");
                }
                else if (currentSeson ==  exanak[3] ) {
                    fill("orange");
                }

                rect(x * side, y * side, side, side);
            }

            //xotaker
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("brown");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
               rect(x * side, y * side, side, side);
            }
            // else if (matrix[y][x] == 6) {
            //     fill("lightblue");
            //    rect(x * side, y * side, side, side);
            // }
        }
    }
    //xot
    for (var i in grrasArr) {
        grrasArr[i].mul();
    }


    for (var i in grasseat) {
        grasseat[i].eat();
    }

    for (var i in meateater) {
        meateater[i].eat();
    }
    for (var i in hunter) {
        hunter[i].kil();
    }
    for (var i in mine) {
        mine[i].kil();
    }


}
function mouseClicked(){
    console.log('jhvhhb')
}



//hishi grrasArr gri ayspes


function mouseClicked(){
    var tx =prompt("Write color's  name(blue,yellow,green,red,brown) and kill it ");
    if (tx=='green'){
        grrasArr=[]; 
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    matrix[y][x] = 0;
                    
                }
            }
            
        }
        alert("You kill grass");
    }
    else if (tx=='yellow'){
        grasseat=[]; 
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 2) {
                    matrix[y][x] = 0;
                    
                }
            }
            
        }
        alert("You kill grasseater");
    }
    else if (tx=='red'){
        meateater=[]; 
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 3) {
                    matrix[y][x] = 0;
                    
                }
            }
            
        }
        alert("You kill meateater");
    }

    else if (tx=='brown'){
        hunter=[]; 
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 4) {
                    matrix[y][x] = 0;
                    
                }
            }
            
        }
        alert("You kill hunter");
    }
    else if (tx=='blue'){
        mine=[]; 
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 5) {
                    matrix[y][x] = 0;
                    
                }
            }
            
        }
        alert("You kill mine");
    }
 



    


 
  
}