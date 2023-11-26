const cards = [
    { type: 'Sword', name: 'One', int: 1, value: 11, img: '../images/Sword_1.jpeg' },
    { type: 'Sword', name: 'Two', int: 2, value: 0, img: '../images/Sword_2.jpeg' },
    { type: 'Sword', name: 'Three', int: 3, value: 10, img: '../images/Sword_3.jpeg' },
    { type: 'Sword', name: 'Four', int: 4, value: 0, img: '../images/Sword_4.jpeg' },
    { type: 'Sword', name: 'Five', int: 5, value: 0, img: '../images/Sword_5.jpeg' },
    { type: 'Sword', name: 'Six', int: 6, value: 0, img: '../images/Sword_6.jpeg' },
    { type: 'Sword', name: 'Seven', int: 7, value: 0, img: '../images/Sword_7.jpeg' },
    { type: 'Sword', name: 'Eight', int: 8, value: 0, img: '../images/Sword_8.jpeg' },
    { type: 'Sword', name: 'Nine', int: 9, value: 0, img: '../images/Sword_9.jpeg' },
    { type: 'Sword', name: 'Ten', int: 10, value: 2, img: '../images/Sword_10.jpeg' },
    { type: 'Sword', name: 'Eleven', int: 11, value: 3, img: '../images/Sword_11.jpeg' },
    { type: 'Sword', name: 'Twelthe', int: 12, value: 4, img: '../images/Sword_12.jpeg' },
    { type: 'Cup', name: 'One', int: 1, value: 11, img: '../images/Cup_1.jpeg' },
    { type: 'Cup', name: 'Two', int: 2, value: 0, img: '../images/Cup_2.jpeg' },
    { type: 'Cup', name: 'Three', int: 3, value: 10, img: '../images/Cup_3.jpeg' },
    { type: 'Cup', name: 'Four', int: 4, value: 0, img: '../images/Cup_4.jpeg' },
    { type: 'Cup', name: 'Five', int: 5, value: 0, img: '../images/Cup_5.jpeg' },
    { type: 'Cup', name: 'Six', int: 6, value: 0, img: '../images/Cup_6.jpeg' },
    { type: 'Cup', name: 'Seven', int: 7, value: 0, img: '../images/Cup_7.jpeg' },
    { type: 'Cup', name: 'Eight', int: 8, value: 0, img: '../images/Cup_8.jpeg' },
    { type: 'Cup', name: 'Nine', int: 9, value: 0, img: '../images/Cup_9.jpeg' },
    { type: 'Cup', name: 'Ten', int: 10, value: 2, img: '../images/Cup_10.jpeg' },
    { type: 'Cup', name: 'Eleven', int: 11, value: 3, img: '../images/Cup_11.jpeg' },
    { type: 'Cup', name: 'Twelthe', int: 12, value: 4, img: '../images/Cup_12.jpeg' },
    { type: 'Gold', name: 'One', int: 1, value: 11, img: '../images/Gold_1.jpeg' },
    { type: 'Gold', name: 'Two', int: 2, value: 0, img: '../images/Gold_2.jpeg' },
    { type: 'Gold', name: 'Three', int: 3, value: 10, img: '../images/Gold_3.jpeg' },
    { type: 'Gold', name: 'Four', int: 4, value: 0, img: '../images/Gold_4.jpeg' },
    { type: 'Gold', name: 'Five', int: 5, value: 0, img: '../images/Gold_5.jpeg' },
    { type: 'Gold', name: 'Six', int: 6, value: 0, img: '../images/Gold_6.jpeg' },
    { type: 'Gold', name: 'Seven', int: 7, value: 0, img: '../images/Gold_7.jpeg' },
    { type: 'Gold', name: 'Eight', int: 8,value: 0, img: '../images/Gold_8.jpeg' },
    { type: 'Gold', name: 'Nine', int: 9, value: 0, img: '../images/Gold_9.jpeg' },
    { type: 'Gold', name: 'Ten', int: 10, value: 2, img: '../images/Gold_10.jpeg' },
    { type: 'Gold', name: 'Eleven', int: 11, value: 3, img: '../images/Gold_11.jpeg' },
    { type: 'Gold', name: 'Twelthe', int: 12, value: 4, img: '../images/Gold_12.jpeg' },
    { type: 'Club', name: 'One', int: 1, value: 11, img: '../images/Club_1.jpeg' },
    { type: 'Club', name: 'Two', int: 2, value: 0, img: '../images/Club_2.jpeg' },
    { type: 'Club', name: 'Three', int: 3, value: 10, img: '../images/Club_3.jpeg' },
    { type: 'Club', name: 'Four', int: 4, value: 0, img: '../images/Club_4.jpeg' },
    { type: 'Club', name: 'Five', int: 5, value: 0, img: '../images/Club_5.jpeg' },
    { type: 'Club', name: 'Six', int: 6, value: 0, img: '../images/Club_6.jpeg' },
    { type: 'Club', name: 'Seven', int: 7, value: 0, img: '../images/Club_7.jpeg' },
    { type: 'Club', name: 'Eight', int: 8,value: 0, img: '../images/Club_8.jpeg' },
    { type: 'Club', name: 'Nine', int: 9, value: 0, img: '../images/Club_9.jpeg' },
    { type: 'Club', name: 'Ten', int: 10, value: 2, img: '../images/Club_10.jpeg' },
    { type: 'Club', name: 'Eleven', int:11, value: 3, img: '../images/Club_11.jpeg' },
    { type: 'Club', name: 'Twelthe', int: 12, value: 4, img: '../images/Club_12.jpeg' }
  ];

  const cardDeck = new Deck(cards);

  window.onload = function () {

    document.querySelector('#game-container').style.display = 'none';
    document.querySelector('#game-rules').style.display = 'none';
    document.querySelector('#game-end').style.display = 'none';

    let valueCard = document.getElementById('valueCard');
    let deck = document.getElementById('deck');
    let pile = document.getElementById('pile');
    let playerPoints = document.getElementById('playerPoints');
    let botPoints = document.getElementById('botPoints');

    //Shuffles the cards and puts it in the deck
    cardDeck.shuffleCardsToDeck();
    //Gets the random value card
    cardDeck.checkValueCard();
    
    const startButton = document.getElementById('start-button');
    const restartButton = document.getElementById("restart-button");

    let game;
    let playerTurn = true;
    
    //Listens to the button click when the games is going to start
    startButton.addEventListener('click', function () {
      game = new CardGame;
      game.dealCards();

      //This is where the deck and chosen is created and viewed on the page
      deck.append(cardDeck.displayDeck());
      valueCard.append(cardDeck.displayValueCard());

      startGame();
    });
    
    //Listens to the button click when the games is going to restart
    restartButton.addEventListener("click", function () {
      game = new CardGame;
      game.dealCards();

      //This is where the deck and chosen is created and viewed on the page
      deck.append(cardDeck.displayDeck());
      valueCard.append(cardDeck.displayValueCard());

      startGame();
    })

    function startGame(){
      console.log('start game');
      game.start();

      //Displays the initial hand of the player and the bot
      game.board();
      
      document.getElementById('board').addEventListener('click', (e) => {
        e.target.remove()
        // let tmp = e.target;
        // console.log(tmp);
        let srcString = e.target.src.replace('http://127.0.0.1:5500/', "../")

        //Finish the last part
        if(game.player.hand.length !== 0 && game.bot.hand.length !== 0){
          //This is where the players choice is taken and put in the array to compare
          if(playerTurn){
            let index = game.player.hand.findIndex(card => card.img === String(srcString));
            let playerTemp = game.player.hand.splice(index, 1);
            let playerCardChosen = playerTemp.pop();

            if(playerCardChosen){
              cardDeck.cardsChosen.push(playerCardChosen);
              let player = document.querySelector('#players-hand');
              player.innerHTML = '';
              game.player.showCards('players-hand');
              playerTurn = false;
            }

            //This is where the bots choice is taken and put in the array to compare
            let random = Math.floor(Math.random() * 3);
            let botTemp = game.bot.hand.splice(random, 1);
            let botCardChosen = botTemp.pop();
            
            if(botCardChosen){
              cardDeck.cardsChosen.push(botCardChosen);
              let bot = document.querySelector('#bots-hand');
              bot.innerHTML = '';
              game.bot.showCards('bots-hand');
              playerTurn = true;
            }

            //When the cards are chosen it compares the values to add the points to the correct player
            //and add the new card to the player and bots hand while updating the deck and pile
            if(cardDeck.cardsChosen.length === 2){
              let choice = document.querySelector('#cards-chosen');
              choice.innerHTML = '';
              cardDeck.displayCardsChosen();

              let card1 = cardDeck.cardsChosen[0];
              let card2 = cardDeck.cardsChosen[1];

              game.checkCards(card1, card2);

              if(cardDeck.deck.length === 0 && cardDeck.valueCard.length === 0){
                setTimeout(() => {
                  for(let j = 0; j < 2; j++){
                    let tmp = cardDeck.cardsChosen.pop();
                    cardDeck.pileCards.push(tmp);
                  }
                  pile.innerHTML = '';
                  pile.append(cardDeck.displayPile());
                  choice.innerHTML = '';
                }, 1000);

                setTimeout(() => {
                  let player = document.querySelector('#players-hand');
                  player.innerHTML = '';
                  game.player.showCards('players-hand');
  
                  let bot = document.querySelector('#bots-hand');
                  bot.innerHTML = '';
                  game.bot.showCards('bots-hand');
                }, 1000);
              }else if(cardDeck.deck.length === 1){
                setTimeout(() => {
                  for(let j = 0; j < 2; j++){
                    let tmp = cardDeck.cardsChosen.pop();
                    cardDeck.pileCards.push(tmp);
                  }
                  pile.innerHTML = '';
                  pile.append(cardDeck.displayPile());
                  choice.innerHTML = '';
                }, 1000);

                let playerPush = cardDeck.deck.pop();
                game.player.hand.push(playerPush);
                let botPush = cardDeck.valueCard.pop();
                game.bot.hand.push(botPush);
      
                deck.innerHTML = '';
                valueCard.innerHTML = '';

                setTimeout(() => {
                  let player = document.querySelector('#players-hand');
                  player.innerHTML = '';
                  game.player.showCards('players-hand');
  
                  let bot = document.querySelector('#bots-hand');
                  bot.innerHTML = '';
                  game.bot.showCards('bots-hand');
                }, 1000);
              }else{
                setTimeout(() => {
                  for(let j = 0; j < 2; j++){
                    let tmp = cardDeck.cardsChosen.pop();
                    cardDeck.pileCards.push(tmp);
                  }

                  pile.innerHTML = '';
                  pile.append(cardDeck.displayPile());
                  choice.innerHTML = '';
                }, 1000);
  
                let playerPush = cardDeck.deck.pop();
                game.player.hand.push(playerPush);
                let botPush = cardDeck.deck.pop();
                game.bot.hand.push(botPush);
  
                setTimeout(() => {
                  let player = document.querySelector('#players-hand');
                  player.innerHTML = '';
                  game.player.showCards('players-hand');
  
                  let bot = document.querySelector('#bots-hand');
                  bot.innerHTML = '';
                  game.bot.showCards('bots-hand');
                }, 1000);
  
                deck.innerHTML = '';
                deck.append(cardDeck.displayDeck());
              }

              //Display the points on the page
              playerPoints.innerText = `${game.player.totalPoints()}`;

              botPoints.innerText = `${game.bot.totalPoints()}`;
            }
          }
        }

        //When the hands and stack are empty show who won the game
        if(game.player.hand.length === 0 && game.bot.hand.length === 0){
          game.end();
        }
      })
    }

    const rulesButton = document.getElementById('rules-button');

    //Listens to the button click when the users wants to know the rules
    rulesButton.addEventListener('click', function () {
      rulesInfo();
    });

    function rulesInfo(){
      document.querySelector('#game-container').style.display = 'none';
      document.querySelector('#game-end').style.display = 'none';
      document.querySelector('#game-rules').style.display = 'block';
    };
  };