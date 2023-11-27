class CardGame {
  constructor(){
    this.startScreen = document.getElementById('game-intro');
    this.gameScreen = document.getElementById('game-screen');
    this.info = document.getElementById('game-container');
    this.gameEndScreen = document.getElementById('game-end');
    this.endMessage = document.getElementById('end-message');
    this.player = new Player(this.gameScreen);
    this.bot = new Player(this.gameScreen);
    this.height = 600;
    this.width = 800;
  }

  //Starts the game with hiding all other information that is not necessary
  start(){
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = 'none';
    this.gameScreen.style.display = 'inherit';
    this.info.style.display = 'flex';
  }
    
  //Add the cards to each players hand
  dealCards(){
    for(let i = 0; i < 3; i++){
      let tmp = cardDeck.deck.pop();
      this.player.hand.push(tmp);
    }

    for(let j = 0; j < 3; j++){
      let tmp = cardDeck.deck.pop();
      this.bot.hand.push(tmp);
    }
  }

  //Compares the cards to se on which players point to add it to
  checkCards(card1, card2, cardType){
    if(card1.type === cardType && card2.type === cardType){
      if(card1.int < card2.int && card1.value > card2.value){
        this.player.points += card1.value + card2.value;
      }else{
        this.bot.points += card1.value + card2.value;
      }
    }else if(card1.type === cardType && card2.type !== cardType){
      this.player.points += card1.value + card2.value;
    }else if(card1.type !== cardType && card2.type === cardType){
      this.bot.points += card1.value + card2.value;
    }else {
      if(card1.type === card2.type){
        if(card1.int < card2.int && card1.value > card2.value){
          this.player.points += card1.value + card2.value;
        }else{
          this.bot.points += card1.value + card2.value;
        }
      }else{
        this.player.points += card1.value + card2.value;
      }
    }
  }

  //Display the hands on the page
  board(){
    this.player.showCards('players-hand');
    this.bot.showCards('bots-hand');
    cardDeck.displayCardsChosen();
  }

  //Display who won the game and hides the game
  end() {
    this.gameScreen.style.height = `${0}px`;
    this.gameScreen.style.width = `${0}px`;
    this.gameScreen.style.display = 'none';
    this.info.style.display = 'none';
    this.gameEndScreen.style.display = 'inherit';
      
    if (this.player.points > this.bot.points) {
      this.endMessage.innerText = `You won! You finished with a total of ${this.player.points} points. Great Job!`;
    }else if(this.player.points < this.bot.points){
      let totalPoints = this.player.points + this.bot.points;
      this.endMessage.innerText = `You lost! by a diference of ${totalPoints - this.player.points} points. Better luck next time!`;
    } else {
      this.endMessage.innerText = `You both won! That was a great match of luck!`;
    }
  }
}