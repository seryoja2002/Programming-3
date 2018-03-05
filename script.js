var matrix = [];
var m = 30;
var n = 40;
var a = 0;

for (var i = 0; i < m; i++) {
    matrix.push([]);
}

for (var a = 0; a < n; a++) {
    for (var x = 0; x < m; x++) {
        matrix[x].push(Math.round(Math.random() * 4));
    }
}
var grassArr = [];
var side = 25;
var xotaker = [];
var monster = [];
var lion = [];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("grey");

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                xotaker.push(new Xotaker(x, y));
            }
            else if (matrix[y][x] == 3) {
                monster.push(new Monster(x, y));
            }
            else if (matrix[y][x] == 4) {
                lion.push(new Lion(x, y));
            }
        }
    }

}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("grey");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
    }

    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }

    for (var i in xotaker) {
        xotaker[i].sharjvel();
    }
    for (var i in xotaker) {
        xotaker[i].utel();
        for (var c in grassArr) {
            if (grassArr[c].x == xotaker[i].x && grassArr[c].y == xotaker[i].y) {
                grassArr.splice(c, 1);
            }
        }
    }
    for (var i in xotaker) {
        xotaker[i].bazmanal();
    }
    for (var i in xotaker) {
        xotaker[i].mahanal();
    }

    for (var i in monster) {
        monster[i].sharjvel();
    }

    for (var i in monster) {
        monster[i].utel();
        for (var c in xotaker) {
            if (xotaker[c].x == monster[i].x && xotaker[c].y == monster[i].y) {
                xotaker.splice(c, 1);
            }
        }
    }
    for (var i in monster) {
        monster[i].bazmanal();
    }
    for (var i in monster) {
        monster[i].mahanal()
    }
    for (var i in lion) {
        lion[i].sharjvel();
    }
    for (var i in lion) {
        lion[i].bazmanal();
    }
    for (var i in lion) {
        lion[i].utel();
        for (var c in monster) {
            if (monster[c].x == lion[i].x && monster[c].y == lion[i].y) {
                monster.splice(c, 1);
            }
        }
    }
}
