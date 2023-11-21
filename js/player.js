class Player {
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.hand = [];
        this.points = 0;
    }

    showCards(id){
        const display = document.getElementById(id);
        
        for (let i = 0; i < this.hand.length; i++) {
            let img = document.createElement('img');
            img.setAttribute('id', 'card');
            img.src = `${this.hand[i].img}`;

            display.appendChild(img);
        }
    }

    totalPoints(){
        return this.points;
    }
}