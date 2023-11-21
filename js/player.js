class Player {
    constructor(gameScreen, left, top, width, height){
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.hand = [];
        this.points = 0;
    }

    handCards(){
        const display = document.getElementById('players-hand');

        let space = document.createElement('br');
        display.appendChild(space);

        for (let i = 0; i < this.hand.length; i++) {
            let img = document.createElement('img');
            img.src = `${this.hand[i].img}`;

            img.style.border = '5px solid black';
            img.style.borderRadius = '10px';
            img.style.height = '150px';
            img.style.width = '100px';

            display.appendChild(img);
        }
        display.style.left = `${this.left}px`;
        display.style.top = `${this.top}px`;
    }

    totalPoints(){
        return this.points;
    }
}

class Bot extends Player {
    handCards(){
        const display = document.getElementById('bots-hand');

        let space = document.createElement('br');
        display.appendChild(space);

        for (let i = 0; i < this.hand.length; i++) {
            let img = document.createElement('img');
            img.src = `${this.hand[i].img}`;

            img.style.border = '5px solid black';
            img.style.borderRadius = '10px';
            img.style.height = '150px';
            img.style.width = '100px';

            display.appendChild(img);
        }
        display.style.left = `${this.left}px`;
        display.style.top = `${this.top}px`;
    }

    totalPoints(){
        return super.totalPoints();
    }

    cardToUse(){}
}