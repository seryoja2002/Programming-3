class Gigant {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.index = 5;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
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
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkVandakner = this.yntrelVandak(0);
        var datarkVandakner = this.yntrelVandak(1);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
        }
    }
    bazmanal() {
        if (this.energy == 10) {
            var norVandak = random(this.yntrelVandak(0));
            if (norVandak) {
                var norGigant = new Gigant(norVandak[0], norVandak[1]);
                gigant.push(norGigant)
                matrix[norVandak[1]][norVandak[0]] = 4;
                this.multiply = 0;
            }
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var datarkVandakner = this.yntrelVandak(4);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 5;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++;
        }
        else {
            this.sharjvel();
        }
    }
} 