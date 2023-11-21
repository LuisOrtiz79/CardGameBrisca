class CardGame {
    constructor(){
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.info = document.getElementById('game-container');
        this.player = new Player(this.gameScreen);
        this.bot = new Player(this.gameScreen);
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

    dealCards(){
        this.player.hand = deckBase.deck.splice(0,3);
        this.bot.hand = deckBase.deck.splice(0,3);
    }

    clearHand(){
        document.getElementById('img').innerHTML = '';
    }

    board(){
        this.player.showCards('players-hand');
        this.bot.showCards('bots-hand');
        deckBase.displayCardChosen();
    }

    checkCards(card1, card2){
        if(card1.type === deckBase.valueCard.type && card2.type === deckBase.valueCard.type){
            if(card1.value > card2.value){
                this.player.points += card1.value + card2.value;
            }else{
                this.bot.points += card1.value + card2.value;
            }
        }else if(card1.type === deckBase.valueCard.type && card2.type !== deckBase.valueCard.type){
            this.player.points += card1.value + card2.value;
        }else if(card2.type === deckBase.valueCard.type && card1.type !== deckBase.valueCard.type){
            this.bot.points += card1.value + card2.value;
        }else{
            if(card1.type === card2.type){
                if(card1.value > card2.value){
                  this.player.points += card1.value + card2.value;
                }else{
                  this.bot.points += card1.value + card2.value;
                }
            }else{
                this.player.points += card1.value + card2.value;
            }
        }
    }
}