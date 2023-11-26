class Player {
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.hand = [];
        this.points = 0;
    }

    showCards(id){
        if(id === 'players-hand'){
            const display = document.getElementById(id);

            const name = document.createElement('p');
            name.innerText = 'Players hand:';
            display.appendChild(name);

            for (let i = 0; i < this.hand.length; i++) {
                let img = document.createElement('img');
                img.setAttribute('id', 'card');
                img.src = `${this.hand[i].img}`;

                display.appendChild(img);
            }

        }else{
            const display = document.getElementById(id);

            const name = document.createElement('p')
            name.innerText = 'Bots hand:';
            display.appendChild(name);

            for (let i = 0; i < this.hand.length; i++) {
                let img = document.createElement('img');
                img.setAttribute('id', 'card');
                img.src = `${this.hand[i].img}`;

                display.appendChild(img);
            }
        }
        
    }

    totalPoints(){
        return this.points;
    }
}