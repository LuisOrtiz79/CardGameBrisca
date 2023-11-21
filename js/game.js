class CardGame {
    constructor(){
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.info = document.getElementById('game-container');
        this.player = new Player(this.gameScreen, 600, 400, 75, 150);
        this.ChosenCard = [];
        this.bot = new Bot(this.gameScreen, 1, 400, 75, 150);
        this.botChosenCard = [];
        this.height = 600;
        this.width = 800;
        this.deck = [];
    }

    start(){
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'inherit';
        this.info.style.display = 'flex';
    }

    board(){
        for(let i = 0; i < 3; i++){
            let tmp = deckBase.deck.pop();
            this.bot.hand.push(tmp);
        }
        for(let j = 0; j < 3; j++){
            let tmp = deckBase.deck.pop();
            this.player.hand.push(tmp);
        }

        console.log(this.bot.hand);
        console.log(this.player.hand);

        this.bot.handCards();


        this.player.handCards();
    }
}